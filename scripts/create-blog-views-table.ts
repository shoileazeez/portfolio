import { config } from 'dotenv';
import pool from '../src/lib/db';

// Load environment variables
config({ path: '.env.local' });

async function createBlogViewsTable() {
  const client = await pool.connect();
  
  try {
    console.log('Creating blog_views table...');
    
    await client.query(`
      CREATE TABLE IF NOT EXISTS blog_views (
        id SERIAL PRIMARY KEY,
        blog_id INTEGER NOT NULL REFERENCES blogs(id) ON DELETE CASCADE,
        viewer_identifier VARCHAR(255),
        ip_address VARCHAR(100),
        user_agent TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log('Blog views table created successfully!');
    console.log('Table creation completed');
  } catch (error) {
    console.error('Error creating blog_views table:', error);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

createBlogViewsTable().catch(console.error);