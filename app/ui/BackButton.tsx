'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton = () => {
  const router = useRouter();

  return <Button onClick={() => router.back()}>Go Back</Button>;
};

export default BackButton;
