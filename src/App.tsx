import { ToastContainer } from 'react-toastify';

import AppRoutes from './routes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <AppRoutes />
    </>
  );
};

export default App;
