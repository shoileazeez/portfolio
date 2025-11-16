import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { withAuth } from '@/lib/middleware';

export async function GET() {
  try {
    const client = await pool.connect();
    try {
      // Select all fields needed for the project list and edit views
      const result = await client.query(`
        SELECT id, title, description, year, tags, slug, link, live_demo, github, image, demo_link, cover_image, overview, challenge, solution, impact, platform, pypi_url, api_docs_url
        FROM projects 
        ORDER BY created_at DESC
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
    console.error('Error fetching projects:', error);
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
      impact,
      platform,
      pypi_url: pypiUrl,
      api_docs_url: apiDocsUrl
    } = data;

    const client = await pool.connect();
    try {
      const result = await client.query(`
        INSERT INTO projects (
          title, description, year, tags, slug, link, live_demo, github, image, demo_link, cover_image, overview, challenge, solution, impact, platform, pypi_url, api_docs_url
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
        RETURNING *
      `, [
        title, description, year, tags, slug, link, liveDemo, github, image, demoLink, coverImage, overview, challenge, solution, impact, platform, pypiUrl, apiDocsUrl
      ]);

      return NextResponse.json(result.rows[0], { status: 201 });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}