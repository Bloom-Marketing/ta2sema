import { fetchUserSports } from '@/actions';
import { auth } from '@/auth';
import DeleteSport from './delete-form';

const SportList = async () => {
  const session = await auth();

  if (!session?.user) return null;

  const sports = await fetchUserSports(session.user.id!);
  return (
    <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
      {sports.map((sport) => (
        <li key={sport.id} className="mb-2">
          {sport.name}
          {sport.description && (
            <span className="text-gray-500 ml-2">({sport.description})</span>
          )}
          <DeleteSport id={sport.id} />
        </li>
      ))}
    </ol>
  );
};

export default SportList;
