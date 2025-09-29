import { doLogout } from '@/actions';

const LogoutForm = () => {
  return (
    <form action={doLogout}>
      <button
        className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg"
        type="submit"
        name="action"
        value="google"
      >
        Sign Out
      </button>
    </form>
  );
};

export default LogoutForm;
