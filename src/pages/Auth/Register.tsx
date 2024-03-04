import { zodResolver } from '@hookform/resolvers/zod';
import { resolve } from 'path';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import Input from '~/components/Input';
import ShowValidation from '~/components/ShowValidation';

const registerSchema = z.object({
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

type IRegisterForm = z.infer<typeof registerSchema>;

const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<IRegisterForm>({ resolver: zodResolver(registerSchema) });
    const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log(data);
        reset();
    };
    return (
        <form action='' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input
                    htmlFor='name'
                    placeholder='Nhập tên của bạn...'
                    title='Họ và tên'
                    require
                    type='text'
                    {...register('name')}
                />
                <ShowValidation errorField={errors.name} />
            </div>
            <div>
                <Input
                    htmlFor='phone'
                    placeholder='Nhập số điện thoại của bạn...'
                    title='Số điện thoại'
                    require
                    type='text'
                    {...register('phone')}
                />
                <ShowValidation errorField={errors.phone} />
            </div>

            <div>
                <Input
                    htmlFor='email'
                    placeholder='Nhập email của bạn...'
                    title='Email'
                    require
                    type='text'
                    {...register('email')}
                />
                <ShowValidation errorField={errors.email} />
            </div>

            <div>
                <Input
                    htmlFor='password'
                    placeholder='Nhập mật khẩu...'
                    title='Mật khẩu'
                    type='password'
                    require
                    {...register('password')}
                />
                <ShowValidation errorField={errors.password} />
            </div>

            <div className='grid grid-cols-2 gap-2 items-end justify-between'>
                <div>
                    <Input
                        htmlFor='date_of_birth'
                        title='Ngày sinh'
                        type='date'
                        require
                        {...register('date_of_birth')}
                    />
                    <ShowValidation errorField={errors.date_of_birth} />
                </div>

                <div className='flex flex-col justify-center w-full'>
                    <div className='flex justify-between items-center gap-4'>
                        <Input htmlFor='sex' title='Name' value={1} flexBox type='radio' {...register('sex')} />
                        <Input htmlFor='sex' title='Nữ' value={0} flexBox type='radio' {...register('sex')} />
                    </div>
                    <ShowValidation errorField={errors.sex} />
                </div>
            </div>
            <div className={`mt-3`}>
                <label htmlFor='region' className='text-black font-semibold'>
                    Khu vực
                    <span className='text-[#e41a0f]'>*</span>
                </label>
                <select
                    className='border border-gray-500 rounded-[3px] focus:border-[#e41a0f] p-2 w-full'
                    {...register('region')}
                >
                    <option value=''>--Chọn khu vực--</option>
                    <option value='123123'>Hà Nội</option>
                </select>
            </div>
            <ShowValidation errorField={errors.region} />

            <div className={`mt-3`}>
                <label htmlFor='fay_cinema' className='text-black font-semibold'>
                    Rạp yêu thích
                    <span className='text-[#e41a0f]'>*</span>
                </label>
                <select
                    className='border border-gray-500 rounded-[3px] focus:border-[#e41a0f] p-2 w-full'
                    {...register('fay_cinema')}
                >
                    <option value=''>--Chọn rạp yêu thích--</option>
                    <option value='312312'>AEON Hà Đông</option>
                </select>
            </div>
            <ShowValidation errorField={errors.fay_cinema} />

            <button
                disabled={isSubmitting}
                className='w-full mt-3 h-14 bg-[#e41A0f] text-white p-3 border-transparent rounded-md flex flex-col items-center justify-center'
            >
                {isSubmitting ? (
                    <span className='w-7 h-7 border-4 border-white animate-spin  rounded-full border-dotted inline-block'></span>
                ) : (
                    <span className=' inline-block'>Đăng ký</span>
                )}
            </button>
            <Link
                className='text-center  flex flex-col justify-center text-md text-blue-500 my-2 hover:underline'
                to='/login'
            >
                Bạn đã có tài khoản?
            </Link>
        </form>
    );
};

export default Register;
