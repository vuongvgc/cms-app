'use client';

import { createUser } from '@/app/lib/actions';
import { UserType } from '@/app/lib/type';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormState } from 'react-dom';
import { DefaultValues, useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Username must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email format.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export type UserFormProps = {
  onSubmit: typeof createUser;
  defaultValues?: DefaultValues<UserType>;
  isReadOnly?: boolean;
};

const userDefaultValues: DefaultValues<UserType> = {
  name: '',
  email: '',
  password: '',
};

const UserForm = ({ onSubmit, defaultValues, isReadOnly }: UserFormProps) => {
  const form = useForm<UserType>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: defaultValues || userDefaultValues,
  });
  const [errorMessage, dispatch] = useFormState(onSubmit, null);

  return (
    <Form {...form}>
      <form
        id='user-form'
        onSubmit={form.handleSubmit(dispatch)}
        className='space-y-8'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input readOnly={isReadOnly} placeholder='Name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input readOnly={isReadOnly} placeholder='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  readOnly={isReadOnly}
                  placeholder='Password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default UserForm;
