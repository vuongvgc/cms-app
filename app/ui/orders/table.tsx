import { OrderType } from '@/app/lib/type';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default async function OrderTable({ orders }: { orders: OrderType[] }) {
  return (
    <div className='border shadow-sm rounded-lg p-2'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Order</TableHead>
            <TableHead className='min-w-[150px]'>User</TableHead>
            <TableHead className='hidden md:table-cell'>Channel</TableHead>
            <TableHead className='hidden md:table-cell'>Date</TableHead>
            <TableHead className='text-right'>Total</TableHead>
            <TableHead className='hidden sm:table-cell'>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className='font-medium'>{order.orderNo}</TableCell>
              <TableCell>{order.user}</TableCell>
              <TableCell className='hidden md:table-cell'>{order.channel}</TableCell>
              <TableCell className='hidden md:table-cell'>
                {order.date.toString()}
              </TableCell>
              <TableCell className='text-right'>{order.total}</TableCell>
              <TableCell className='hidden sm:table-cell'>{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
