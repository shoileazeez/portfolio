import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

interface ExperienceParams {
  params: Promise<{ id: string }>;
}

export async function PUT(
  request: NextRequest,
  { params }: ExperienceParams
) {
  try {
    const { id } = await params;
    const data = await request.json();
    const client = await pool.connect();
    
    try {
      const result = await client.query(`
        UPDATE experience 
        SET title = $1, company = $2, period = $3, description = $4, 
            achievements = $5, technologies = $6, updated_at = CURRENT_TIMESTAMP
        WHERE id = $7
        RETURNING *
      `, [
        data.title,
        data.company,
        data.period,
        data.description,
        data.achievements,
        data.technologies,
        id
      ]);
      
      return NextResponse.json(result.rows[0]);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error updating experience:', error);
    return NextResponse.json({ error: 'Failed to update experience' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: ExperienceParams
) {
  try {
    const { id } = await params;
    const client = await pool.connect();
    
    try {
      await client.query('DELETE FROM experience WHERE id = $1', [id]);
      return NextResponse.json({ success: true });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error deleting experience:', error);
    return NextResponse.json({ error: 'Failed to delete experience' }, { status: 500 });
  }
}