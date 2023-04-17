import { PrivateRoute } from 'common/components';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <PrivateRoute>
      <Outlet />
    </PrivateRoute>
  );
};

export default MainLayout;
