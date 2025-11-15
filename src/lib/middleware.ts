import { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function withAuth(request: NextRequest) {
  const token = request.cookies.get('admin-token')?.value;
  
  if (!token) {
    return null;
  }

  return await verifyToken(token);
}