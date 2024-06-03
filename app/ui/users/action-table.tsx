'use client';
import { UserType } from '@/app/lib/type';
import DialogContentUser from '@/app/ui/users/dialog-content';
import { UserFormProps } from '@/app/ui/users/form';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoveHorizontalIcon } from 'lucide-react';
import { useState } from 'react';

export default function ActionTable({ user }: { user: UserType }) {
  const handleUpdateUser = (user: UserType) => {
    console.log('user', user);

    setTimeout(() => {
      setDialogState({ type: null, isOpen: false, defaultValues: undefined });
    }, 3000);
  };

  const [dialogState, setDialogState] = useState<{
    type: 'view' | 'update' | null;
    isOpen: boolean;
    defaultValues?: UserFormProps['defaultValues'];
  }>({
    type: null,
    isOpen: false,
    defaultValues: undefined,
  });

  const handleDialogOpen = (type: 'view' | 'update', user: UserType) => {
    setDialogState({ type, isOpen: true, defaultValues: user });
  };

  const handleDialogClose = () => {
    setDialogState({ type: null, isOpen: false, defaultValues: undefined });
  };

  return (
    <div className='border shadow-sm rounded-lg p-2'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='icon'>
            <MoveHorizontalIcon className='w-4 h-4' />
            <span className='sr-only'>Actions</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem onClick={() => handleDialogOpen('view', user)}>
            View
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDialogOpen('update', user)}>
            Update
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {dialogState.type && (
        <Dialog open={dialogState.isOpen} onOpenChange={handleDialogClose}>
          <DialogContentUser
            title={dialogState.type === 'view' ? 'View User' : 'Update User'}
            description={
              dialogState.type === 'view'
                ? 'Here are the user details.'
                : 'Update the user details.'
            }
            isReadOnly={dialogState.type === 'view'}
            onSubmit={
              dialogState.type === 'update' ? handleUpdateUser : handleDialogClose
            }
            defaultValues={dialogState.defaultValues}
          />
        </Dialog>
      )}
    </div>
  );
}
