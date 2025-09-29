import SportList from '@/components/ui/sports/sport-list';

import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <Suspense>
        <SportList />
      </Suspense>
    </main>
  );
}
