'use client';

import UserForm, { UserFormProps } from '@/app/ui/users/form';
import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type DialogContentUserProps = {
  title: string;
  description: string;
} & UserFormProps;

export default function DialogContentUser({
  title,
  description,
  onSubmit,
  defaultValues,
  isReadOnly,
}: DialogContentUserProps) {
  return (
    <DialogContent className='sm:max-w-[425px]'>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <div className='grid gap-4 py-4'>
        <UserForm
          onSubmit={onSubmit}
          defaultValues={defaultValues}
          isReadOnly={isReadOnly}
        />
      </div>
      <DialogFooter>
        <Button type='submit' form='user-form'>
          {isReadOnly ? 'Close' : 'Save'}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
