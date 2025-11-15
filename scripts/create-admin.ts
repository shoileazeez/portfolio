#!/usr/bin/env tsx

import { config } from 'dotenv';
import pool from '../src/lib/db';
import bcrypt from 'bcryptjs';

// Load environment variables
config({ path: '.env.local' });

async function createAdminUser() {
  const email = process.argv[2];
  const password = process.argv[3];

  if (!email || !password) {
    console.error('Usage: npm run create-admin <email> <password>');
    process.exit(1);
  }

  try {
    const client = await pool.connect();
    
    try {
      // Check if user already exists
      const existingUser = await client.query(
        'SELECT id FROM admin_users WHERE email = $1',
        [email]
      );

      if (existingUser.rows.length > 0) {
        console.error('Admin user with this email already exists');
        process.exit(1);
      }

      // Hash password
      const passwordHash = await bcrypt.hash(password, 10);

      // Create admin user
      const result = await client.query(
        'INSERT INTO admin_users (email, password_hash) VALUES ($1, $2) RETURNING id, email',
        [email, passwordHash]
      );

      console.log('Admin user created successfully:');
      console.log('ID:', result.rows[0].id);
      console.log('Email:', result.rows[0].email);
      console.log('Password:', password);
      
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

createAdminUser();