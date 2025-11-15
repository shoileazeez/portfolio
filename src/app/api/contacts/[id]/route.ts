import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { withAuth } from '@/lib/middleware';

interface ContactParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: ContactParams) {
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
        'SELECT * FROM contacts WHERE id = $1',
        [id]
      );
      
      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Contact not found' },
          { status: 404 }
        );
      }
      
      return NextResponse.json(result.rows[0]);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error fetching contact:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: ContactParams) {
  try {
    const user = await withAuth(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const { status } = await request.json();

    const client = await pool.connect();
    try {
      const result = await client.query(`
        UPDATE contacts 
        SET status = $1, updated_at = CURRENT_TIMESTAMP
        WHERE id = $2
        RETURNING *
      `, [status, id]);

      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Contact not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(result.rows[0]);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error updating contact:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: ContactParams) {
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
        'DELETE FROM contacts WHERE id = $1 RETURNING *',
        [id]
      );
      
      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Contact not found' },
          { status: 404 }
        );
      }
      
      return NextResponse.json({ message: 'Contact deleted successfully' });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error deleting contact:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}