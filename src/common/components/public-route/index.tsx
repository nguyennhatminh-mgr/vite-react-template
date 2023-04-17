import { HOME_PATH } from 'constants/paths';

import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import localStorageUtil from 'utils/local-storage';

const PublicRoute = (props: { children: ReactNode }) => {
  const { children } = props;
  const accessToken = localStorageUtil.getAccessToken();

  if (accessToken) {
    return <Navigate to={HOME_PATH} />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default PublicRoute;
