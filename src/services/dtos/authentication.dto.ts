import { IToken } from 'types/token';
import * as z from 'zod';

export const LoginDto = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: 'Password is required' }),
});

export type LoginDtoType = z.infer<typeof LoginDto>;

export interface LoginResponseDto {
  token: IToken;
}

export interface GetCurrentUserResponseDto {
  id: number;
  email: string;
}
