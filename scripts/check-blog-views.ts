import { config } from 'dotenv';
import pool from '../src/lib/db';

// Load environment variables
config({ path: '.env.local' });

async function checkBlogViews() {
  const client = await pool.connect();
  
  try {
    console.log('Checking blog_views table...');
    
    // Check if table exists and has data
    const viewsResult = await client.query('SELECT COUNT(*) as total FROM blog_views');
    console.log('Total blog views in database:', viewsResult.rows[0].total);
    
    // Get recent views
    const recentViews = await client.query(`
      SELECT bv.*, b.title 
      FROM blog_views bv 
      JOIN blogs b ON bv.blog_id = b.id 
      ORDER BY bv.created_at DESC 
      LIMIT 10
    `);
    
    console.log('Recent views:');
    recentViews.rows.forEach(view => {
      console.log(`- Blog: "${view.title}" (ID: ${view.blog_id}) at ${view.created_at}`);
    });
    
    // Check blog list with view counts
    const blogsWithViews = await client.query(`
      SELECT b.id, b.title, 
             COALESCE((SELECT COUNT(*) FROM blog_views bv WHERE bv.blog_id = b.id), 0) AS views
      FROM blogs b
      ORDER BY b.date DESC
      LIMIT 5
    `);
    
    console.log('\nBlogs with view counts:');
    blogsWithViews.rows.forEach(blog => {
      console.log(`- "${blog.title}": ${blog.views} views`);
    });
    
  } catch (error) {
    console.error('Error checking blog views:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

checkBlogViews().catch(console.error);