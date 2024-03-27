import Tippy from '@tippyjs/react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import orderApi from '~/api/orderApi';
import DetailsOrder from '~/components/DetailsOrder';
import useAsync from '~/hooks/useAsync';
import { RootState } from '~/store/store';
import { IOrder } from '~/types/Order';

const MyTicket = () => {
    const MyId = useSelector((state: RootState) => state.auth.login.currentUser.id);
    const { value: myListOrders } = useAsync<IOrder[] | []>(async () => {
        try {
            const { data } = await orderApi.getListMyOrders(MyId);
            console.log(data, 'lll');

            return data;
        } catch (error) {
            return [];
        }
    }, []);
    return (
        <>
            <div className=' py-3 -z-50'>
                <h1 className='w-full bg-gray-800 p-2 text-center text-white'>Vé của tôi</h1>
            </div>
            {myListOrders &&
                myListOrders.map((item, i) => (
                    <div className='mx-6 flex items-center justify-between'>
                        <div className='flex items-center  gap-4 border-b-2 p-5'>
                            <div>
                                <p>x{item.seat_quantity}</p>
                            </div>
                            <div className='flex h-20 w-20 flex-col justify-center rounded-full border border-transparent'>
                                {typeof item.movie_ref !== 'string' && (
                                    <img
                                        className='h-full w-full rounded-full border border-transparent object-cover'
                                        src={item.movie_ref.thumbnail}
                                        alt=''
                                    />
                                )}
                            </div>
                            <div className='flex h-full flex-col justify-between'>
                                <h1 className='mb-2 text-[20px] font-semibold'>{item.movie_name}</h1>
                                <p className='text-[14px] font-thin italic'>{format(item.date, 'yyyy-MM-dd')}</p>
                            </div>
                            <div className='h-3 w-3'>
                                <Tippy content={item.status || 'kb'} placement='right'>
                                    <span
                                        className={`flex h-full w-full flex-col rounded-full border border-gray-400 ${item.status === 'active' ? 'bg-green-600' : item.status === 'used' ? 'bg-gray-700' : 'bg-slate-500'} shadow-md`}
                                    ></span>
                                </Tippy>
                            </div>
                        </div>
                        <div>
                            <DetailsOrder order={item}>
                                <button className='text-[15px] italic text-blue-600 underline transition-all duration-150 ease-in-out hover:scale-105 hover:text-blue-800'>
                                    Chi tiết
                                </button>
                            </DetailsOrder>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default MyTicket;
