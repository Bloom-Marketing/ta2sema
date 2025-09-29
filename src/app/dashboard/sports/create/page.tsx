import SportForm from '@/components/ui/sports/sport-form';

import { Suspense } from 'react';

export default function CreateSport() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <Suspense>
        <SportForm />
      </Suspense>
    </main>
  );
}
