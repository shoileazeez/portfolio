import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { withAuth } from '@/lib/middleware';

export async function GET() {
  try {
    const client = await pool.connect();
    try {
      // Select all fields needed for the blog list and edit views
      const result = await client.query(`
        SELECT id, title, description, excerpt, date, year, slug, cover_image, tags, read_time, content
        FROM blogs 
        ORDER BY date DESC
        LIMIT 50
      `);
      
      const response = NextResponse.json(result.rows);
      // Add caching headers
      response.headers.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=600');
      return response;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await withAuth(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await request.json();
    const {
      title,
      description,
      excerpt,
      date,
      year,
      slug,
      link,
      cover_image,
      tags,
      read_time,
      content
    } = data;

    const client = await pool.connect();
    try {
      const result = await client.query(`
        INSERT INTO blogs (
          title, description, excerpt, date, year, slug, link,
          cover_image, tags, read_time, content
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING *
      `, [
        title, description, excerpt, date, year, slug, link,
        cover_image, tags, read_time, content
      ]);

      return NextResponse.json(result.rows[0], { status: 201 });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}