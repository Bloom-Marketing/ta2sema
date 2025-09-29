import Header from '@/components/layout/header';
import SignIn from './login/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <SignIn />
    </main>
  );
}
