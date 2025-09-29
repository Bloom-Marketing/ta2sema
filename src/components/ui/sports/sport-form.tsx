import { createSport } from '@/actions';
import { auth } from '@/auth';

const SportForm = async () => {
  const session = await auth();

  if (!session?.user) return null;

  const createSportWithUserId = createSport.bind(null, session.user.id!);

  return (
    <form action={createSportWithUserId}>
      <input
        type="text"
        name="name"
        placeholder="Sport Name"
        className="border border-gray-300 p-2 rounded-md m-1"
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Sport Description"
        className="border border-gray-300 p-2 rounded-md m-1"
      />

      <button
        className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg"
        type="submit"
        name="action"
      >
        Create Sport
      </button>
    </form>
  );
};

export default SportForm;
