import { AvatarAdmin } from '@/app/ui/avatar';
import UsersTable from '@/app/ui/users/table';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Users',
};

export default function Users() {
  return (
    <div className='border shadow-sm rounded-lg p-2'>
      <UsersTable />
    </div>
  );
}
