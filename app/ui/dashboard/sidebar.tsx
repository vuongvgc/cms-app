import NavLinks from '@/app/ui/dashboard/nav-links';
import Logo from '@/app/ui/logo';
export default function SideNav() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex h-[60px] items-center px-6'>
        <Logo />
      </div>
      <div className='flex-1'>
        <nav className='grid items-start px-4 text-sm font-medium'>
          <NavLinks />
        </nav>
      </div>
    </div>
  );
}
