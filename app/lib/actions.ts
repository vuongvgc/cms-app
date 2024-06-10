'use server';
import { UserType } from '@/app/lib/type';
import { generateHashedPassword } from '@/app/lib/utils';
import { isEmailExits } from '@/app/lib/validation';
import { signIn } from '@/auth';
import { sql } from '@vercel/postgres';
import { AuthError, User } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import * as z from 'zod';

export async function authenticate(_: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
// This is temporary

const UserSchema = z.object({
  name: z.string().min(1).max(255),
  id: z.string().min(1).max(255),
  email: z.string().email().min(1).max(255),
  password: z.string().min(6).max(255),
});

const CreateUser = UserSchema.pick({ name: true, email: true, password: true });
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};
export async function createUser(_: any, user: UserType) {
  const validatedFields = CreateUser.safeParse({
    name: user.name,
    email: user.email,
    password: user.password,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.',
    };
  }

  const { name, email, password } = validatedFields.data;

  const hashedPassword = await generateHashedPassword(password);

  try {
    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Create User.' };
  }

  revalidatePath('/dashboard/user');
  redirect('/dashboard/user');
}

export async function fetchUser(id: string) {
  try {
    const data = await sql<User>`
      SELECT
        id,
        name,
        email
      FROM users
      WHERE id = ${id}
    `;

    const user = data.rows;
    return user.at(0);
  } catch (err) {
    console.error('Database Error:', err);
  }
}

// const UpdateUser = UserSchema.omit({ id: true });

// export async function updateUser(user: UserType) {
//   const validatedFields = UpdateUser.safeParse({
//     name: user.name,
//     email: user.email,
//     password: user.password,
//   });

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: 'Missing Fields. Failed to Update User.',
//     };
//   }

//   const { name, email, password } = validatedFields.data;

//   const hashedPassword = await generateHashedPassword(password);

//   try {
//     await sql`
//       UPDATE users
//       SET name = ${name}, email = ${email}, password = ${hashedPassword}
//       WHERE id = ${id}
//     `;
//   } catch (error) {
//     return { message: 'Database Error: Failed to Update User.' };
//   }

//   // Additional logic if needed, like revalidation or redirection
// }
