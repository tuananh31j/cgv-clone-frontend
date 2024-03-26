import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().nonempty('Bạn chưa điền email!').email('Email không hợp lệ!'),
    password: z.string().nonempty('Bạn chưa điền mật khẩu!').min(4, 'Mật khẩu tối thiểu 4 ký tự!'),
});

export const registerSchema = z.object({
    name: z.string().nonempty('Bạn chưa điền tên!').max(20, 'Tên không được vượt quá 20 ký tự!'),
    phone: z
        .string()
        .nonempty('Bạn chưa điền số điện thoại!')
        .min(10, 'Số điện thoại không hợp lệ!')
        .max(12, 'Số điện thoại không hợp lệ!'),
    email: z.string().nonempty('Bạn chưa điền email!').email('Email không hợp lệ!'),
    password: z.string().nonempty('Bạn chưa điền mật khẩu!'),
    sex: z
        .string()
        .nullable()
        .refine((value) => value !== null, {
            message: 'Bạn phải chọn giới tính',
        }),
    date_of_birth: z.string().nonempty('Bạn chưa điền ngày sinh!'),
    region: z.string().nonempty('Bạn chưa chọn khu vực!'),
    fay_cinema: z.string().nonempty('Bạn chưa điền rạp yêu thích!'),
});

export type IRegisterForm = z.infer<typeof registerSchema>;

export type IRefreshTokenResponse = { accessToken: string };

export type ILoginResponse = {
    name: string;
    role: string;
    accessToken: string;
    id: string;
};

export type ILoginForm = z.infer<typeof loginSchema>;
