'use client';

import { navItems } from '@/app/lib/sidenav';
import { Badge } from '@/components/ui/badge';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50',
              { 'bg-gray-100': isActive }
            )}
            prefetch={false}
          >
            <item.icon className='h-4 w-4' />
            {item.label}
            {item.badge ? (
              <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                {item.badge}
              </Badge>
            ) : null}
          </Link>
        );
      })}
    </>
  );
}
