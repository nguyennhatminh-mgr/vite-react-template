import { LOGIN_PATH } from 'constants/paths';

import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import localStorageUtil from 'utils/local-storage';

const PrivateRoute = (props: { children: ReactNode }) => {
  const { children } = props;
  const accessToken = localStorageUtil.getAccessToken();

  if (accessToken) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }

  return <Navigate to={LOGIN_PATH} />;
};

export default PrivateRoute;
