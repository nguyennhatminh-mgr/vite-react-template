import { PublicRoute } from 'common/components';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <PublicRoute>
      <Outlet />
    </PublicRoute>
  );
};

export default PublicLayout;
