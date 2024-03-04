import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().nonempty('Bạn chưa điền email!').email('Email không hợp lệ!'),
    password: z.string().nonempty('Bạn chưa điền mật khẩu!').min(4, 'Mật khẩu tối thiểu 4 ký tự!'),
});

export type IRefreshTokenResponse = { accessToken: string };

export type ILoginResponse = {
    name: string;
    role: string;
    accessToken: string;
};

export type ILoginForm = z.infer<typeof loginSchema>;
