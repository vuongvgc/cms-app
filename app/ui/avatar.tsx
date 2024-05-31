import Image from 'next/image';

export function AvatarAdmin() {
  return (
    <Image
      className='rounded-full'
      src='/avatar.jpeg'
      width={200}
      height={200}
      alt='Avatar'
    />
  );
}
