import DialogCreateForm from '@/app/ui/users/dialog-create-form';
import UsersTable from '@/app/ui/users/table';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Users',
};

export default function Users() {
  return (
    <div className='border  flex flex-col gap-4 shadow-sm rounded-lg p-2'>
      <div className='flex items-center justify-end gap-4'>
        <DialogCreateForm />
      </div>
      <UsersTable />
    </div>
  );
}
