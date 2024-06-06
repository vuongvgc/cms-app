import { sql } from '@vercel/postgres';

export async function isEmailExits(email: string): Promise<boolean> {
  try {
    const user = await sql`SELECT Id FROM users WHERE email=${email}`;
    if (user.rows.length === 0) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user');
  }
}
