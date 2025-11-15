import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';

const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || 'fallback-secret');

export async function signToken(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secret);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}

export async function getAdminUser(email: string) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'SELECT * FROM admin_users WHERE email = $1',
      [email]
    );
    return result.rows[0] || null;
  } finally {
    client.release();
  }
}