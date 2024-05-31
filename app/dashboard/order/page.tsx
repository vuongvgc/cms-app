import OrderTable from '@/app/ui/orders/table';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Orders',
};

export default function Users() {
  return (
    <div className='border shadow-sm rounded-lg p-2'>
      <OrderTable />
    </div>
  );
}
