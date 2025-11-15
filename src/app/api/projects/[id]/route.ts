import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { withAuth } from '@/lib/middleware';

interface ProjectParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: ProjectParams) {
  try {
    const { id } = await params;
    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT * FROM projects WHERE id = $1',
        [id]
      );
      
      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Project not found' },
          { status: 404 }
        );
      }
      
      return NextResponse.json(result.rows[0]);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: ProjectParams) {
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
      year,
      tags,
      slug,
      link,
      live_demo: liveDemo,
      github,
      image,
      demo_link: demoLink,
      cover_image: coverImage,
      overview,
      challenge,
      solution,
      impact
    } = data;

    const client = await pool.connect();
    try {
      const result = await client.query(`
        UPDATE projects SET 
          title = $1, description = $2, year = $3, tags = $4, slug = $5, 
          link = $6, live_demo = $7, github = $8, image = $9, demo_link = $10, 
          cover_image = $11, overview = $12, challenge = $13, solution = $14, 
          impact = $15, updated_at = CURRENT_TIMESTAMP
        WHERE id = $16
        RETURNING *
      `, [
        title, description, year, tags, slug, link, liveDemo, github, image, demoLink, coverImage, overview, challenge, solution, impact, id
      ]);

      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Project not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(result.rows[0]);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: ProjectParams) {
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
        'DELETE FROM projects WHERE id = $1 RETURNING *',
        [id]
      );

      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Project not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ message: 'Project deleted successfully' });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}