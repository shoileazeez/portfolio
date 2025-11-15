import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM experience ORDER BY id DESC');
      return NextResponse.json(result.rows);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error fetching experience:', error);
    return NextResponse.json({ error: 'Failed to fetch experience' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const client = await pool.connect();
    
    try {
      const result = await client.query(`
        INSERT INTO experience (title, company, period, description, achievements, technologies)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
      `, [
        data.title,
        data.company,
        data.period,
        data.description,
        data.achievements,
        data.technologies
      ]);
      
      return NextResponse.json(result.rows[0]);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error creating experience:', error);
    return NextResponse.json({ error: 'Failed to create experience' }, { status: 500 });
  }
}