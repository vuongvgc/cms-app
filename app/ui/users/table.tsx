import { UserType } from '@/app/lib/type';
import ActionTable from '@/app/ui/users/action-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default async function UsersTable({ users }: { users: UserType[] }) {
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
            <TableRow key={user.id}>
              <TableCell className='font-medium'>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className='text-right'>
                <ActionTable user={user} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
