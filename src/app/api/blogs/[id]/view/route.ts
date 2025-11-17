import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { verifyToken } from '@/lib/auth';

interface Params {
  params: Promise<{ id: string }>;
}

export async function POST(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const body = await request.json().catch(() => ({}));
    const viewer_identifier = body.viewer_identifier || null;

    const xff = request.headers.get('x-forwarded-for');
    const ip_address = xff ? xff.split(',')[0].trim() : request.headers.get('x-real-ip') || null;
    const user_agent = request.headers.get('user-agent') || null;

    const client = await pool.connect();
    try {
      // Ensure blog exists
      const blogRes = await client.query('SELECT id FROM blogs WHERE id = $1', [id]);
      if (blogRes.rows.length === 0) {
        return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
      }

      await client.query(
        `INSERT INTO blog_views (blog_id, viewer_identifier, ip_address, user_agent) VALUES ($1, $2, $3, $4)`,
        [id, viewer_identifier, ip_address, user_agent]
      );

      return NextResponse.json({ success: true }, { status: 201 });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error recording blog view:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT COUNT(*)::int AS views FROM blog_views WHERE blog_id = $1',
        [id]
      );
      return NextResponse.json({ views: result.rows[0].views });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error fetching blog views:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const token = request.cookies.get('admin-token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const client = await pool.connect();
    try {
      await client.query('DELETE FROM blog_views WHERE blog_id = $1', [id]);
      return NextResponse.json({ success: true });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error clearing blog views:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
