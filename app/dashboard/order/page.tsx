import { fetchFilteredOrders } from '@/app/lib/data';
import OrderTable from '@/app/ui/orders/table';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Orders',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  const orders = await fetchFilteredOrders(query);

  return (
    <main>
      <Suspense fallback={<></>}>
        <OrderTable orders={orders} />
      </Suspense>
    </main>
  );
}
