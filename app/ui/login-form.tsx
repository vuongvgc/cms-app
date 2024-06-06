'use client';
import { authenticate } from '@/app/lib/actions';
import FormErrorMessage from '@/app/ui/FormErrorMessage';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormState, useFormStatus } from 'react-dom';

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
              <Input
                id='email'
                type='email'
                name='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                name='password'
                placeholder='Enter password'
                minLength={6}
                required
              />
            </div>
            <Button type='submit' className='w-full' disabled={pending}>
              Login
            </Button>
            <FormErrorMessage errorMessage={errorMessage || ''} />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
