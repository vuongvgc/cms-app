'use client';
import { UserType } from '@/app/lib/type';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoveHorizontalIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ActionTable({ user }: { user: UserType }) {
  const navigation = useRouter();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='icon'>
            <MoveHorizontalIcon className='w-4 h-4' />
            <span className='sr-only'>Actions</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem onClick={() => navigation.push(`user/${user.id}/edit`)}>
            Update
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
