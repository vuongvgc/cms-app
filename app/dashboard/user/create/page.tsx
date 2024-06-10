import Breadcrumbs from '@/app/ui/breadcrumbs';
import { Metadata } from 'next';

import { createUser } from '@/app/lib/actions';
import { CardUserForm } from '@/app/ui/users/card-form';

export const metadata: Metadata = {
  title: 'Create User',
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Users', href: '/dashboard/user' },
          {
            label: 'Create User',
            href: `/dashboard/user/create`,
            active: true,
          },
        ]}
      />
      <CardUserForm
        title='Create User'
        description='Fill in the details to create a new user.'
        onSubmit={createUser}
      />
    </main>
  );
}
