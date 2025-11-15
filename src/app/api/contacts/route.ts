import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { withAuth } from '@/lib/middleware';

const Mailjet = require('node-mailjet');

// Initialize Mailjet with environment variables
const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_SECRET_KEY
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const client = await pool.connect();
    
    try {
      // Save contact to database
      const result = await client.query(`
        INSERT INTO contacts (name, email, subject, message)
        VALUES ($1, $2, $3, $4)
        RETURNING *
      `, [name, email, subject || 'Contact Form Submission', message]);

      const contact = result.rows[0];

      // Send email via Mailjet
      try {
        await mailjet
          .post("send", { version: 'v3.1' })
          .request({
            Messages: [
              {
                From: {
                  Email: process.env.MAILJET_FROM_EMAIL || 'shoabdulazeez@gmail.com',
                  Name: 'Portfolio Contact Form'
                },
                To: [
                  {
                    Email: process.env.MAILJET_TO_EMAIL || 'shoabdulazeez@gmail.com',
                    Name: 'Shoile Abdulazeez'
                  }
                ],
                Subject: `Portfolio Contact: ${subject || 'New Message'}`,
                HTMLPart: `
                  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                      New Contact Form Submission
                    </h2>
                    <div style="margin: 20px 0;">
                      <p><strong>Name:</strong> ${name}</p>
                      <p><strong>Email:</strong> ${email}</p>
                      <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
                    </div>
                    <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
                      <h3 style="margin-top: 0; color: #333;">Message:</h3>
                      <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
                    </div>
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
                      <p>This email was sent from your portfolio contact form.</p>
                      <p>Contact ID: ${contact.id}</p>
                      <p>Timestamp: ${new Date(contact.created_at).toLocaleString()}</p>
                    </div>
                  </div>
                `,
                TextPart: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject || 'No subject provided'}

Message:
${message}

---
Contact ID: ${contact.id}
Timestamp: ${new Date(contact.created_at).toLocaleString()}
                `
              }
            ]
          });

        console.log('Email sent successfully via Mailjet');
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Don't fail the request if email fails, but log the error
      }

      return NextResponse.json({
        message: 'Contact form submitted successfully',
        contact: {
          id: contact.id,
          name: contact.name,
          email: contact.email,
          subject: contact.subject,
          created_at: contact.created_at
        }
      });
      
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = await withAuth(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const client = await pool.connect();
    try {
      const result = await client.query(`
        SELECT * FROM contacts 
        ORDER BY created_at DESC
      `);
      
      return NextResponse.json(result.rows);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}