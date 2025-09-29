import LogoutForm from '@/components/ui/logout-form';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <p>Dashboard Page</p>
      <Link href="/dashboard/sports">
        <button className="bg-blue-500 text-white p-1 rounded-md m-1 text-lg">
          Go to Sport List Page
        </button>
      </Link>
      <Link href="/dashboard/sports/create">
        <button className="bg-blue-500 text-white p-1 rounded-md m-1 text-lg">
          Go to Create Sport Page
        </button>
      </Link>
      <LogoutForm />
    </div>
  );
}
