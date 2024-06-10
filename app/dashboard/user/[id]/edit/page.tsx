import { fetchUser, updateUser } from '@/app/lib/actions';
import { UserType } from '@/app/lib/type';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { CardUserForm } from '@/app/ui/users/card-form';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Edit User',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const user = await fetchUser(id);
  if (!user) {
    notFound();
  }

  const updateInvoiceWithId = updateUser.bind(null, id);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Users', href: '/dashboard/user' },
          {
            label: 'Edit User',
            href: `/dashboard/user/${id}/edit`,
            active: true,
          },
        ]}
      />
      <CardUserForm
        title='Create User'
        defaultValues={user as UserType}
        description='Fill in the details to create a new user.'
        onSubmit={updateInvoiceWithId}
      />
    </main>
  );
}
