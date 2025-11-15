import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { withAuth } from '@/lib/middleware';

interface BlogParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: BlogParams) {
  try {
    const { id } = await params;
    const client = await pool.connect();
    
    try {
      const result = await client.query(
        'SELECT * FROM blogs WHERE id = $1',
        [id]
      );
      
      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Blog not found' },
          { status: 404 }
        );
      }
      
      return NextResponse.json(result.rows[0]);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: BlogParams) {
  try {
    const user = await withAuth(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const data = await request.json();
    const {
      title,
      description,
      excerpt,
      date,
      year,
      cover_image,
      tags,
      read_time,
      content
    } = data;

    const client = await pool.connect();
    try {
      const result = await client.query(`
        UPDATE blogs 
        SET title = $1, description = $2, excerpt = $3, date = $4, 
            year = $5, cover_image = $6, tags = $7, read_time = $8, 
            content = $9, updated_at = CURRENT_TIMESTAMP
        WHERE id = $10
        RETURNING *
      `, [
        title, description, excerpt, date, year, cover_image, 
        tags, read_time, content, id
      ]);

      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Blog not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(result.rows[0]);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: BlogParams) {
  try {
    const user = await withAuth(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const client = await pool.connect();
    
    try {
      const result = await client.query(
        'DELETE FROM blogs WHERE id = $1 RETURNING *',
        [id]
      );
      
      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Blog not found' },
          { status: 404 }
        );
      }
      
      return NextResponse.json({ message: 'Blog deleted successfully' });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}