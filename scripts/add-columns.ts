import { config } from 'dotenv';
import pool from '../src/lib/db';

// Load environment variables
config({ path: '.env.local' });

async function addColumns() {
  console.log('Adding new columns to projects table...');
  
  try {
    const client = await pool.connect();
    
    try {
      // Add the new columns if they don't exist
      await client.query(`
        ALTER TABLE projects 
        ADD COLUMN IF NOT EXISTS platform VARCHAR(255),
        ADD COLUMN IF NOT EXISTS pypi_url VARCHAR(500),
        ADD COLUMN IF NOT EXISTS api_docs_url VARCHAR(500);
      `);

      console.log('Columns added successfully!');
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error adding columns:', error);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  addColumns()
    .then(() => {
      console.log('Column addition completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Column addition failed:', error);
      process.exit(1);
    });
}