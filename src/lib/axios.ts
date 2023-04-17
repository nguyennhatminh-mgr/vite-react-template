/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from 'axios';
import config from 'config';
import localStorageUtil from 'utils/local-storage';

const axios = Axios.create({
  baseURL: config.serverUrl,
});

axios.defaults.headers.common = {
  'Content-type': 'application/json',
};

axios.interceptors.request.use((axiosConfig: any) => {
  const accessToken = localStorageUtil.getAccessToken();
  const newConfig = {
    ...axiosConfig,
    headers: {
      ...axiosConfig?.headers,
      Authorization: accessToken ? `Bearer ${accessToken.accessToken}` : null,
    },
  };
  return newConfig;
});

export default axios;
