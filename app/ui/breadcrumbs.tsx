import { clsx } from 'clsx';
import { Slash } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
  return (
    <Breadcrumb aria-label='Breadcrumb' className='mb-6 block'>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <>
            <BreadcrumbItem
              key={breadcrumb.href}
              aria-current={breadcrumb.active}
              className={clsx(breadcrumb.active ? 'text-gray-900' : 'text-gray-500')}
            >
              <BreadcrumbLink href={breadcrumb.href}>
                {breadcrumb.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 ? (
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
            ) : null}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
