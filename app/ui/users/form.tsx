'use client';

import { UserData } from '@/app/lib/type';
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
import { DefaultValues, useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  userName: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters.' }),
  fullName: z.string().min(1, { message: 'Full name is required.' }),
  email: z.string().email({ message: 'Invalid email format.' }),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10}$/, { message: 'Phone number must be 10 digits.' }),
});

export type UserFormProps = {
  onSubmit: (data: UserData) => void;
  defaultValues?: DefaultValues<UserData>;
  isReadOnly?: boolean;
};

const userDefaultValues: DefaultValues<UserData> = {
  fullName: '',
  email: '',
  phoneNumber: '',
  userName: '',
};

const UserForm = ({ onSubmit, defaultValues, isReadOnly }: UserFormProps) => {
  const form = useForm<UserData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: defaultValues || userDefaultValues,
  });

  return (
    <Form {...form}>
      <form
        id='user-form'
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8'
      >
        <FormField
          control={form.control}
          name='userName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input readOnly={isReadOnly} placeholder='Username' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='fullName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input readOnly={isReadOnly} placeholder='Full Name' {...field} />
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
          name='phoneNumber'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input readOnly={isReadOnly} placeholder='Phone Number' {...field} />
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
