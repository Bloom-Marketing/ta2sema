import { deleteSport } from '@/actions';

export default function DeleteSport({ id }: { id: string }) {
  const deleteSportWithId = deleteSport.bind(null, id);

  return (
    <form action={deleteSportWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span>Delete</span>
      </button>
    </form>
  );
}
