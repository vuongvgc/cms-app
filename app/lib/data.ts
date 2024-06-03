import { OrderType, UserType } from '@/app/lib/type';
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchFilteredOrders(query: string) {
  noStore();
  try {
    const data = await sql<OrderType>`
      SELECT
        order,
        user,
        channel,
        date,
        total,
        status
      FROM orders
      WHERE
        order ILIKE ${'%' + query + '%'} OR
        user ILIKE ${'%' + query + '%'} OR
        channel ILIKE ${'%' + query + '%'} OR
        status ILIKE ${'%' + query + '%'}
      ORDER BY date DESC
    `;

    return data.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch orders.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as UserType;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchFilteredUsers(query: string) {
  noStore();
  try {
    const data = await sql<UserType>`
      SELECT
        id,
        name,
        email,
        password
      FROM users
      WHERE
        name ILIKE ${'%' + query + '%'} OR
        email ILIKE ${'%' + query + '%'}
      ORDER BY name ASC
    `;

    return data.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch users.');
  }
}
