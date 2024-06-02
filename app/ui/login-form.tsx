'use client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { OctagonAlertIcon } from 'lucide-react';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  return (
    <Card className='mx-auto max-w-sm'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl font-bold'>Login</CardTitle>
        <CardDescription>
          Enter your email and password to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={dispatch} className='space-y-3'>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='m@example.com' required />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='Enter password'
                minLength={6}
                required
              />
            </div>
            <Button type='submit' className='w-full' disabled={pending}>
              Login
            </Button>
            <div
              className='flex h-8 items-end space-x-1'
              aria-live='polite'
              aria-atomic='true'
            >
              {errorMessage && (
                <>
                  <OctagonAlertIcon className='h-5 w-5 text-red-500' />
                  <p className='text-sm text-red-500'>{errorMessage}</p>
                </>
              )}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
