'use server';
import { UserType } from '@/app/lib/type';
import { isEmailExits } from '@/app/lib/validation';
import { signIn } from '@/auth';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { AuthError } from 'next-auth';
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

  const isValidEmail = await isEmailExits(email);

  if (isValidEmail) {
    return {
      errors: 'email',
      message: 'Email already used',
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Create User.' };
  }
}
// export async function updateUser(id: string, formData: FormData) {
//   const validatedFields = UpdateUser.safeParse({
//     name: formData.get('name'),
//     email: formData.get('email'),
//     password: formData.get('password'),
//   });

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: 'Missing Fields. Failed to Update User.',
//     };
//   }

//   const { name, email, password } = validatedFields.data;

//   try {
//     await sql`
//       UPDATE users
//       SET name = ${name}, email = ${email}, password = ${password}
//       WHERE id = ${id}
//     `;
//   } catch (error) {
//     return { message: 'Database Error: Failed to Update User.' };
//   }

//   // Additional logic if needed, like revalidation or redirection
// }
