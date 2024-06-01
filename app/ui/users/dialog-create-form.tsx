'use client';
import { UserData } from '@/app/lib/type';
import DialogContentUser from '@/app/ui/users/dialog-content';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { PlusIcon } from 'lucide-react';

export default function DialogCreateForm() {
  const handleCreateUser = (data: UserData) => {
    console.log('Form Data:', data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='flex justify-center items-center gap-2'>
          <PlusIcon className='h-4 w-4' />
          Add
        </Button>
      </DialogTrigger>
      <DialogContentUser
        title='Create User'
        description='Fill in the details to create a new user.'
        onSubmit={handleCreateUser}
      />
    </Dialog>
  );
}
