import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '~/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import ShowValidation from '~/components/ShowValidation';
import { ILoginForm, loginSchema } from '~/types/Auth';
import { useAppDispatch } from '~/store/store';
import { loginAsyncThunk } from '~/store/Slices/AuthSlice';
import showMessage from '~/utilities/showMessage';
import useDocumentTitle from '~/hooks/useDocumentTitle';

const Login = () => {
    useDocumentTitle('Đăng nhập');

    const dispatch = useAppDispatch();
    const navigator = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ILoginForm>({ resolver: zodResolver(loginSchema) });
    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        try {
            dispatch(loginAsyncThunk(data));
            showMessage('Đăng nhập thành công!', 'success');
            navigator('/');
        } catch (error) {
            console.log(error);
        }
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
                className='mt-3 flex h-14 w-full flex-col items-center justify-center rounded-md border-transparent bg-[#e41A0f] p-3 text-white'
            >
                {isSubmitting ? (
                    <span className='inline-block h-7 w-7 animate-spin rounded-full  border-4 border-dotted border-white'></span>
                ) : (
                    <span className=' inline-block'>Đăng nhập</span>
                )}
            </button>
            <Link
                className='text-md  my-2 flex flex-col justify-center text-center text-blue-500 hover:underline'
                to='/'
            >
                Quên mật khẩu?
            </Link>
        </form>
    );
};

export default Login;
