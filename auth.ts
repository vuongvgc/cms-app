import { login } from '@/app/lib/api/auth.api';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { authConfig } from './auth.config';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const mockUser = await login(parsedCredentials.data);
          if (!mockUser) return null;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
