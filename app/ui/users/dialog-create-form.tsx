'use client';
import { createUser } from '@/app/lib/actions';
import DialogContentUser from '@/app/ui/users/dialog-content';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';

export default function DialogCreateForm() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          variant='outline'
          className='flex justify-center items-center gap-2'
        >
          <PlusIcon className='h-4 w-4' />
          Add
        </Button>
      </DialogTrigger>
      <DialogContentUser
        title='Create User'
        description='Fill in the details to create a new user.'
        onSubmit={createUser}
      />
    </Dialog>
  );
}
