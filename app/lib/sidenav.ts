import { ShoppingCart, Users2Icon } from 'lucide-react';

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge: number;
};

export const navItems: NavItem[] = [
  {
    href: '/dashboard/user',
    label: 'Users',
    icon: Users2Icon,
    badge: 0,
  },
  {
    href: '/dashboard/order',
    label: 'Orders',
    icon: ShoppingCart,
    badge: 0,
  },
];
