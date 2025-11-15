import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { withAuth } from '@/lib/middleware';

export async function GET() {
  try {
    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT * FROM personal_info ORDER BY id DESC LIMIT 1'
      );
      return NextResponse.json(result.rows[0] || {});
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error fetching personal info:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const user = await withAuth(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await request.json();
    const { name, title, bio, intro, avatar, github, linkedin, email } = data;

    const client = await pool.connect();
    try {
      // Check if record exists
      const existingResult = await client.query('SELECT id FROM personal_info LIMIT 1');
      
      let result;
      if (existingResult.rows.length > 0) {
        // Update existing record
        result = await client.query(`
          UPDATE personal_info SET 
            name = $1, title = $2, bio = $3, intro = $4, avatar = $5,
            github = $6, linkedin = $7, email = $8, updated_at = CURRENT_TIMESTAMP
          WHERE id = $9
          RETURNING *
        `, [name, title, bio, intro, avatar, github, linkedin, email, existingResult.rows[0].id]);
      } else {
        // Create new record
        result = await client.query(`
          INSERT INTO personal_info (name, title, bio, intro, avatar, github, linkedin, email)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING *
        `, [name, title, bio, intro, avatar, github, linkedin, email]);
      }

      return NextResponse.json(result.rows[0]);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error updating personal info:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}