import { UserData } from '@/app/lib/type';
import { Button } from '@/components/ui/button';
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
  // Add more users here...
];

export default function UsersTable() {
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
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Edit user</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
