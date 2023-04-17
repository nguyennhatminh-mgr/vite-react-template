import { IToken } from 'types/token';

const getToken = (type: 'accessToken' | 'refreshToken') => {
  const token = localStorage.getItem('token');
  if (token) {
    return JSON.parse(token)[type];
  }
  return null;
};

const setToken = (token: IToken) =>
  localStorage.setItem('token', JSON.stringify(token));

const getAccessToken = () => getToken('accessToken');
const getRefreshToken = () => getToken('refreshToken');

const localStorageUtil = {
  getAccessToken,
  getRefreshToken,
  setToken,
};

export default localStorageUtil;
