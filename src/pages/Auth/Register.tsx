import { zodResolver } from '@hookform/resolvers/zod';
import { resolve } from 'path';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '~/api/authApi';
import cinemaApi from '~/api/cinemaApi';
import regionApi from '~/api/regionApi';
import Input from '~/components/Input';
import ShowValidation from '~/components/ShowValidation';
import { IRegisterForm, registerSchema } from '~/types/Auth';
import { ICinema } from '~/types/Cinema';
import { IRegion } from '~/types/Region';
import showMessage from '~/utilities/showMessage';

const Register = () => {
    const [regions, setRegions] = useState<IRegion[]>();
    const [cinemas, setCinemas] = useState<ICinema[]>();
    const navigator = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<IRegisterForm>({ resolver: zodResolver(registerSchema) });

    const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
        try {
            await new Promise((resolve) => {
                setTimeout(resolve, 2000);
            });
            console.log(data);

            await authApi.register(data);
            showMessage('Đăng ký thành công!', 'success');
            reset();
            navigator('/login');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async () => {
            const { data: regionList } = await regionApi.getAll();
            const { data: cinemaList } = await cinemaApi.getAll();
            setRegions(regionList);
            setCinemas(cinemaList);
        })();
    }, []);
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

            <div className='grid grid-cols-2 items-end justify-between gap-2'>
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

                <div className='flex w-full flex-col justify-center'>
                    <div className='flex items-center justify-between gap-4'>
                        <Input htmlFor='sex' title='Name' value={1} flexBox type='radio' {...register('sex')} />
                        <Input htmlFor='sex' title='Nữ' value={0} flexBox type='radio' {...register('sex')} />
                    </div>
                    <ShowValidation errorField={errors.sex} />
                </div>
            </div>
            <div className={`mt-3`}>
                <label htmlFor='region' className='font-semibold text-black'>
                    Khu vực
                    <span className='text-[#e41a0f]'>*</span>
                </label>
                <select
                    className='w-full rounded-[3px] border border-gray-500 p-2 focus:border-[#e41a0f]'
                    {...register('region')}
                >
                    <option value=''>--Chọn khu vực--</option>
                    {regions && regions.map((item) => <option value={item._id}>{item.name}</option>)}
                </select>
            </div>
            <ShowValidation errorField={errors.region} />

            <div className={`mt-3`}>
                <label htmlFor='fay_cinema' className='font-semibold text-black'>
                    Rạp yêu thích
                    <span className='text-[#e41a0f]'>*</span>
                </label>
                <select
                    className='w-full rounded-[3px] border border-gray-500 p-2 focus:border-[#e41a0f]'
                    {...register('fay_cinema')}
                >
                    <option value=''>--Chọn rạp yêu thích--</option>
                    {cinemas && cinemas.map((item) => <option value={item._id}>{item.name}</option>)}
                </select>
            </div>
            <ShowValidation errorField={errors.fay_cinema} />

            <button
                disabled={isSubmitting}
                className='mt-3 flex h-14 w-full flex-col items-center justify-center rounded-md border-transparent bg-[#e41A0f] p-3 text-white'
            >
                {isSubmitting ? (
                    <span className='inline-block h-7 w-7 animate-spin rounded-full  border-4 border-dotted border-white'></span>
                ) : (
                    <span className=' inline-block'>Đăng ký</span>
                )}
            </button>
            <Link
                className='text-md  my-2 flex flex-col justify-center text-center text-blue-500 hover:underline'
                to='/login'
            >
                Bạn đã có tài khoản?
            </Link>
        </form>
    );
};

export default Register;
