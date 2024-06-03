import DialogCreateForm from '@/app/ui/users/dialog-create-form';
import UsersTable from '@/app/ui/users/table';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Users',
};

import { fetchFilteredOrders, fetchFilteredUsers } from '@/app/lib/data';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  const users = await fetchFilteredUsers(query);

  return (
    <main>
      <div className='border  flex flex-col gap-4 shadow-sm rounded-lg p-2'>
        <div className='flex items-center justify-end gap-4'>
          <DialogCreateForm />
        </div>
        <Suspense fallback={<></>}>
          <UsersTable users={users} />
        </Suspense>
      </div>
    </main>
  );
}
