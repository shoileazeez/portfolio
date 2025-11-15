import { config } from 'dotenv';
import { Pool } from 'pg';

// Load environment variables
config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
});

export default pool;