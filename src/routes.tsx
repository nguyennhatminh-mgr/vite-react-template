import { MainLayout, PublicLayout } from 'common/layouts';
import { Home, Login } from 'pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
      ],
    },
    {
      path: '/',
      element: <PublicLayout />,
      children: [
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
