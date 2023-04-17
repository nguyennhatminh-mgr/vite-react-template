import { AxiosResponse } from 'axios';
import axios from 'lib/axios';

import {
  LoginDtoType,
  LoginResponseDto,
  GetCurrentUserResponseDto,
} from './dtos/authentication.dto';

const login = async (
  loginDto: LoginDtoType
): Promise<AxiosResponse<LoginResponseDto>> =>
  axios.post('/auth/login', loginDto);

const getCurrentUser = async (): Promise<
  AxiosResponse<GetCurrentUserResponseDto>
> => axios.get('/users/me');

const authApi = {
  login,
  getCurrentUser,
};

export default authApi;
