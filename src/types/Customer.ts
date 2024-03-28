import { z } from 'zod';

export interface ICustomer {
    _id: string;
    name: string;
    phone: string;
    password: string;
    email: string;
    sex: string;
    address: string;
    date_of_birth: string;
    status: boolean;
    role: string;
    member_card_number: string;
    point: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export const editCustomerForm = z.object({
    _id: z.string(),
    name: z.string().nonempty('Bạn chưa điền tên!').max(20, 'Tên không được vượt quá 20 ký tự!'),
    phone: z
        .string()
        .nonempty('Bạn chưa điền số điện thoại!')
        .min(10, 'Số điện thoại không hợp lệ!')
        .max(12, 'Số điện thoại không hợp lệ!'),
    email: z.string().nonempty('Bạn chưa điền email!').email('Email không hợp lệ!'),
    sex: z
        .string()
        .nullable()
        .refine((value) => value !== null, {
            message: 'Bạn phải chọn giới tính',
        }),
    date_of_birth: z.string().nonempty('Bạn chưa điền ngày sinh!'),
});

export type IEditCustomerForm = z.infer<typeof editCustomerForm>;
