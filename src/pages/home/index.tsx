import { useEffect } from 'react';
import useUserStore from 'stores/user-store';

const Home = () => {
  const { email, getUser } = useUserStore();

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="text-red-500">
      <h1>Home</h1>
      <p className="text-blue-500">Email: {email}</p>
    </div>
  );
};

export default Home;
