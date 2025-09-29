'use client';
import LoginForm from '@/components/ui/login-form';
import Image from 'next/image';

import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5  md:-mt-32">
        <div className="flex h-30 w-full items-center   justify-center rounded-lg bg-blue-500 p-3 md:h-36">
          <Image src={`/logo.png`} alt={'app logo'} width="100" height="100" />
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
