import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '~/components/Input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ShowValidation from '~/components/ShowValidation';
import axiosClient from '~/api/axiosClient';
import { ILoginForm, loginSchema } from '~/types/Auth';
import { RootState, useAppDispatch } from '~/store/store';
import { loginAsyncThunk } from '~/store/Slices/AuthSlice';
import { useSelector } from 'react-redux';

const Login = () => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector((state: RootState) => state.auth.login.loading);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ILoginForm>({ resolver: zodResolver(loginSchema) });
    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        await new Promise((resolve) => {
            setTimeout(resolve, 3000);
        });
        dispatch(loginAsyncThunk(data));
    };

    return (
        <form action='' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input
                    htmlFor='phone'
                    placeholder='Nhập email hoặc số điện thoại của bạn...'
                    title='Email hoặc số điện thoại'
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
                    {...register('password')}
                />
                <ShowValidation errorField={errors.password} />
            </div>

            <button
                disabled={isSubmitting}
                className='w-full mt-3 h-14 bg-[#e41A0f] text-white p-3 border-transparent rounded-md flex flex-col items-center justify-center'
            >
                {isSubmitting ? (
                    <span className='w-7 h-7 border-4 border-white animate-spin  rounded-full border-dotted inline-block'></span>
                ) : (
                    <span className=' inline-block'>Đăng nhập</span>
                )}
            </button>
            <Link
                className='text-center  flex flex-col justify-center text-md text-blue-500 my-2 hover:underline'
                to='/'
            >
                Quên mật khẩu?
            </Link>
        </form>
    );
};

export default Login;
