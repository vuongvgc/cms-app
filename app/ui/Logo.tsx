import { Package2Icon } from 'lucide-react';
import Link from 'next/link';
export default function Logo() {
  return (
    <Link
      href='/'
      className='flex items-center gap-2 font-semibold'
      prefetch={false}
    >
      <Package2Icon className='h-6 w-6' />
      <span className=''>QuickFlow</span>
    </Link>
  );
}
