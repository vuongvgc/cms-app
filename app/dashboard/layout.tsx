import Header from '@/app/ui/dashboard/header';
import SideNav from '@/app/ui/dashboard/sidebar';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]'>
      <div className='border-r bg-gray-100/40 dark:bg-gray-800/40'>
        <SideNav />
      </div>
      <div className='flex flex-col'>
        <Header />
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
          {children}
        </main>
      </div>
    </div>
  );
}
