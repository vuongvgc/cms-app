'use client';
import { UserData } from '@/app/lib/type';
import UserForm from '@/app/ui/users/form';
import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type CustomDialogProps = {
  title: string;
  description: string;
  onSubmit: (data: UserData) => void;
};

export default function DialogContentUser({
  title,
  description,
  onSubmit,
}: CustomDialogProps) {
  return (
    <DialogContent className='sm:max-w-[425px]'>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <div className='grid gap-4 py-4'>
        <UserForm onSubmit={onSubmit} />
      </div>
      <DialogFooter>
        <Button type='submit' form='user-form'>
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

// <>
//   <DialogTrigger asChild>
//     <Button>Add user</Button>
//   </DialogTrigger>

// </>
