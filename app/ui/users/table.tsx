'use client';
import { useState } from 'react';
import { UserData } from '@/app/lib/type';
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MoveHorizontalIcon } from 'lucide-react';

const users: UserData[] = [
  {
    userName: 'olivia.martin',
    fullName: 'Olivia Martin',
    email: 'olivia.martin@example.com',
    phoneNumber: '555-1234',
  },
  {
    userName: 'ava.johnson',
    fullName: 'Ava Johnson',
    email: 'ava.johnson@example.com',
    phoneNumber: '555-5678',
  },
];

export default function UsersTable() {
  const handleUpdateUser = (user: UserData) => {
    console.log('user', user);
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

  const handleDialogOpen = (type: 'view' | 'update', user: UserData) => {
    setDialogState({ type, isOpen: true, defaultValues: user });
  };

  const handleDialogClose = () => {
    setDialogState({ type: null, isOpen: false, defaultValues: undefined });
  };

  return (
    <div className='border shadow-sm rounded-lg p-2'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='min-w-[150px]'>User Name</TableHead>
            <TableHead className='min-w-[150px]'>Full Name</TableHead>
            <TableHead className='min-w-[200px]'>Email</TableHead>
            <TableHead className='min-w-[150px]'>Phone Number</TableHead>
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.userName}>
              <TableCell className='font-medium'>{user.userName}</TableCell>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell className='text-right'>
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
                    <DropdownMenuItem
                      onClick={() => handleDialogOpen('update', user)}
                    >
                      Update
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
            onSubmit={dialogState.type === 'update' ? handleUpdateUser : () => {}}
            defaultValues={dialogState.defaultValues}
          />
        </Dialog>
      )}
    </div>
  );
}
