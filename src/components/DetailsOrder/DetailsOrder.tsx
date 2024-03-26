import { IOrder } from '~/types/Order';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { differenceInMinutes, format, parseISO } from 'date-fns';
import { QRCodeSVG } from 'qrcode.react';
const DetailsOrder = ({ order, children }: { order: IOrder; children: React.ReactNode }) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>{children}</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-45' />
                <Dialog.Content className=' fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[750px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] '>
                    <Dialog.Title className='text-mauve12 m-0 text-[17px] font-medium'>Chi tiet ve ban</Dialog.Title>
                    <div className='grid grid-cols-2'>
                        <div className='line flex items-center gap-x-2'>
                            <div className=''>
                                <img
                                    className='max-h-[30vh] rounded-md border border-transparent'
                                    src={typeof order.movie_ref !== 'string' ? order.movie_ref.thumbnail : ''}
                                    alt=''
                                />
                            </div>
                            <div className='my-5 flex h-[70%] max-w-[400px]  flex-col justify-between'>
                                <h1 className='text-[20px] font-bold uppercase'>{order.movie_name}</h1>
                                <div className='flex w-full justify-between'>
                                    <p className='text-[12px] font-extralight italic'>
                                        {format(order.date, 'yyyy-MM-dd')}
                                    </p>
                                    <div className='flex flex-col justify-center'>
                                        <p className=' text-[12px] font-extralight italic'>
                                            <span>{format(parseISO(order.start_time), 'hh:mm')}</span>~
                                            <span>{format(parseISO(order.end_time), 'hh:mm')}</span>
                                        </p>
                                        <p className='text-[12px] font-extralight italic'>
                                            {differenceInMinutes(order.end_time, order.start_time)} phút
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-[14px] font-bold'>{order.cinema_name}</h3>
                                </div>

                                <div>
                                    <p className='text-[14px] font-bold uppercase'>
                                        {order.seat_name.map((item) => item).join(', ')}
                                    </p>
                                </div>
                                <div>
                                    <p className='text-[14px] font-bold uppercase'>
                                        CVG: combo {order.current_concession_price}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='flex items-center justify-between p-2'>
                                <span>Giá vé: </span>
                                <span>
                                    {order.current_seat_price.toLocaleString('de-DE')}
                                    vnđ
                                </span>
                            </p>
                            <p className='flex items-center justify-between p-2'>
                                <span>Bắp nước: </span>
                                <span>
                                    {order.current_concession_price.toLocaleString('de-DE')}
                                    vnđ
                                </span>
                            </p>
                            <p className='flex items-center justify-between p-2'>
                                <span>Phương thức thanh toán: </span>
                                <span className='text-[10px] font-thin italic'>{'(Tính năng đang cập nhật)'}</span>
                            </p>
                            <p className='my-1 flex items-center justify-between border-t border-white p-2 pt-5'>
                                <QRCodeSVG className='h-20 w-20' value={order.qr_code} />
                                <span>Tổng cộng: </span>{' '}
                                <span>
                                    {(order.current_seat_price + order.current_concession_price).toLocaleString(
                                        'de-DE'
                                    )}{' '}
                                    vnđ
                                </span>
                            </p>
                        </div>
                    </div>

                    <Dialog.Close asChild>
                        <button
                            className='text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none'
                            aria-label='Close'
                        >
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default DetailsOrder;
