import UsersTable from '@/app/ui/users/table';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Users',
};

import { fetchFilteredUsers } from '@/app/lib/data';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';
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
          <Link href='user/create'>
            <Button
              variant='outline'
              className='flex justify-center items-center gap-2'
            >
              <PlusIcon className='h-4 w-4' />
              Add
            </Button>
          </Link>
        </div>
        <Suspense fallback={<></>}>
          <UsersTable users={users || []} />
        </Suspense>
      </div>
    </main>
  );
}
