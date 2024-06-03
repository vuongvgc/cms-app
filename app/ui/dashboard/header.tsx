import { AvatarAdmin } from '@/app/ui/avatar';
import Search from '@/app/ui/search';
import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Package2Icon } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
export default function Header() {
  return (
    <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
      <Link href='#' className='lg:hidden' prefetch={false}>
        <Package2Icon className='h-6 w-6' />
        <span className='sr-only'>Home</span>
      </Link>
      <div className='flex-1'>
        <h1 className='font-semibold text-lg'>Recent Items</h1>
      </div>
      <div className='flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
        <div className='ml-auto flex-1 sm:flex-initial'>
          <Suspense fallback={<></>}>
            <Search placeholder='Search...' />
          </Suspense>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon' className='rounded-full'>
              <AvatarAdmin />
              <span className='sr-only'>Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <button>Logout</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
