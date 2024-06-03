import { OrderType } from '@/app/lib/type';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MoveHorizontalIcon } from 'lucide-react';

export default async function OrderTable({ orders }: { orders: OrderType[] }) {
  return (
    <div className='border shadow-sm rounded-lg p-2'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Order</TableHead>
            <TableHead className='min-w-[150px]'>Customer</TableHead>
            <TableHead className='hidden md:table-cell'>Channel</TableHead>
            <TableHead className='hidden md:table-cell'>Date</TableHead>
            <TableHead className='text-right'>Total</TableHead>
            <TableHead className='hidden sm:table-cell'>Status</TableHead>
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className='font-medium'>{order.orderNo}</TableCell>
              <TableCell>{order.user}</TableCell>
              <TableCell className='hidden md:table-cell'>{order.channel}</TableCell>
              <TableCell className='hidden md:table-cell'>{order.date}</TableCell>
              <TableCell className='text-right'>{order.total}</TableCell>
              <TableCell className='hidden sm:table-cell'>{order.status}</TableCell>
              <TableCell className='text-right'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' size='icon'>
                      <MoveHorizontalIcon className='w-4 h-4' />
                      <span className='sr-only'>Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem>View order</DropdownMenuItem>
                    <DropdownMenuItem>Customer details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
