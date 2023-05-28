import { useEffect } from 'react';
import useUserStore from 'stores/user-store';

import AudioRecorder from './AudioRecorder';

const Home = () => {
  const { email, getUser } = useUserStore();

  useEffect(() => {
    // getUser();
  }, [getUser]);

  return (
    <div className="text-red-500 max-w-4xl mx-auto py-7">
      <h1>Home</h1>
      <p className="text-blue-500 mb-8">Email: {email}</p>
      <AudioRecorder />
    </div>
  );
};

export default Home;
