import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import authApi from '~/api/authApi';
import customerApi from '~/api/customerApi';
import Image from '~/assets';
import Input from '~/components/Input';
import ShowValidation from '~/components/ShowValidation';
import { IEditCustomerForm, editCustomerForm } from '~/types/Customer';
import showMessage from '~/utilities/showMessage';

const MyInfor = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<IEditCustomerForm>({ resolver: zodResolver(editCustomerForm) });

    const onSubmit: SubmitHandler<IEditCustomerForm> = async (data) => {
        try {
            await new Promise((resolve) => {
                setTimeout(resolve, 1000);
            });
            console.log(data);

            await customerApi.edit(data._id, data);
            showMessage('Cập nhật thành công!', 'success');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async () => {
            const { data } = await authApi.getMe();
            console.log(data, '1');

            reset(data);
        })();
    }, []);
    return (
        <>
            <div className=' py-3'>
                <h1 className='w-full bg-gray-800 p-2 text-center text-white'>Thông tin chung</h1>
            </div>
            <div className='mx-6'>
                <div className='flex h-20 w-20 flex-col justify-center rounded-full border border-transparent'>
                    <img
                        className='h-full w-full rounded-full border border-transparent'
                        src={Image.eventItem1}
                        alt=''
                    />
                </div>
                <form action='' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div>
                            <div>
                                <Input htmlFor='name' title='Tên' type='text' require {...register('name')} />
                                <ShowValidation errorField={errors.name} />
                            </div>
                            <div>
                                <Input htmlFor='phone' title='Điện thoại' type='text' require {...register('phone')} />
                                <ShowValidation errorField={errors.phone} />
                            </div>
                            <div className='flex items-center justify-start gap-6'>
                                <Input
                                    htmlFor='sex'
                                    value={'male'}
                                    title='Nam'
                                    type='radio'
                                    flexBox
                                    {...register('sex')}
                                />
                                <Input
                                    htmlFor='sex'
                                    value={'female'}
                                    title='Nữ'
                                    type='radio'
                                    flexBox
                                    {...register('sex')}
                                />
                                <ShowValidation errorField={errors.sex} />
                            </div>
                            <div>
                                <Input
                                    htmlFor='date_of_birth'
                                    require
                                    title='Ngày sinh'
                                    type='date'
                                    {...register('date_of_birth')}
                                />
                                <ShowValidation errorField={errors.date_of_birth} />
                            </div>
                            <div>
                                <Input type='text' require title='Địa chỉ email' {...register('email')} />
                                <ShowValidation errorField={errors.email} />
                            </div>
                        </div>
                    </div>
                    <button
                        disabled={isSubmitting}
                        className='mt-3 flex h-14 w-full flex-col items-center justify-center rounded-md border-transparent bg-[#e41A0f] p-3 text-white'
                    >
                        {isSubmitting ? (
                            <span className='inline-block h-7 w-7 animate-spin rounded-full  border-4 border-dotted border-white'></span>
                        ) : (
                            <span className=' inline-block'>Cập nhật</span>
                        )}
                    </button>
                </form>
            </div>
        </>
    );
};
export default MyInfor;
