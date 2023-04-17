import { HOME_PATH } from 'constants/paths';

import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import authApi from 'services/authentication.service';
import { LoginDtoType, LoginDto } from 'services/dtos/authentication.dto';
import { ErrorResponse } from 'services/dtos/error-response.dto';
import localStorageUtil from 'utils/local-storage';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginDtoType>({
    resolver: zodResolver(LoginDto),
  });

  const onSubmit = async (data: LoginDtoType) => {
    try {
      const response = await authApi.login(data);
      localStorageUtil.setToken(response.data.token);

      navigate(HOME_PATH);
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      toast.error(axiosError.response?.data.message);
    }
  };

  return (
    <div>
      <h1 className="mb-2">Login</h1>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Email"
          className="w-full p-2 border"
          {...register('email')}
        />
        {errors.email?.message && (
          <p className="mb-1 text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-2">
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border"
          {...register('password')}
        />
        {errors.password?.message && (
          <p className="mb-1 text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div>
        <button
          className="border px-2 py-1 w-40"
          onClick={handleSubmit(onSubmit)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
