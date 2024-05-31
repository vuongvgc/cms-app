import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className='flex min-h-screen flex-wrap gap-6 md:flex-nowrap'>
      <div className='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'>
        <div className={` text-xl text-gray-800 md:text-3xl md:leading-normal`}>
          <p className='text-3xl md:text-5xl'>
            <strong>Welcome to QuickFlow</strong>
          </p>
          <p>Efficiency at your Fingertips: Streamline with our CMS.</p>
        </div>
        <Link
          href='/login'
          className='flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base'
        >
          <span>Log in</span> <ArrowRightIcon className='w-5 md:w-6' />
        </Link>
      </div>
      <div className='flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12'>
        <Image
          src='/hero-desktop.png'
          width={1000}
          height={760}
          alt='Screenshots of the dashboard project showing desktop version'
          className='hidden md:block'
        />
        <Image
          src='/hero-mobile.png'
          width={560}
          height={620}
          alt='Screenshot of the dashboard project showing mobile version'
          className='block md:hidden'
        />
      </div>
    </main>
  );
}
