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
import { useForm } from 'react-hook-form';
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
  iceCreamType: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .nullable(),
});

const UserForm = ({
  onSubmit,
  defaultValues,
}: {
  onSubmit: (data: UserData) => void;
  defaultValues?: UserData;
}) => {
  const form = useForm<UserData>({
    resolver: zodResolver(formSchema),
    defaultValues,
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
                <Input placeholder='Username' {...field} />
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
                <Input placeholder='Full Name' {...field} />
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
                <Input placeholder='Email' {...field} />
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
                <Input placeholder='Phone Number' {...field} />
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
