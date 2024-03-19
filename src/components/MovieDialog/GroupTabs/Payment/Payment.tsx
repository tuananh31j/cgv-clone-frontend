import Image from '~/assets';
import Wrapper from '../../Components/Wrapper';
import { IShowtime } from '~/types/Showtime';
import { IConcession } from '~/types/Concession';
import { differenceInMinutes, format, parseISO } from 'date-fns';

const Payment = ({
    onRequest,
    ticketInfor,
}: {
    onRequest: () => void;
    ticketInfor: {
        showtimeTarget: IShowtime;
        concessions: { quanlity: number; concession: IConcession }[];
        seats: { index: number; name: string }[];
    };
}) => {
    const totalConcession = ticketInfor.concessions.reduce(
        (init, item) => item.quanlity * item.concession.price + init,
        0
    );
    const totalTicket = ticketInfor.seats.length * ticketInfor.showtimeTarget.price;
    const totalPay = totalConcession + totalTicket;
    return (
        <>
            <Wrapper title='Thanh toán'>
                <div className='grid grid-cols-2'>
                    <div className='line flex items-center gap-x-2'>
                        <div>
                            <img
                                className='max-h-[30vh] rounded-md border border-transparent'
                                src={ticketInfor.showtimeTarget.movie.thumbnail}
                                alt=''
                            />
                        </div>
                        <div className='my-5 flex h-full max-w-[400px]  flex-col justify-between'>
                            <h1 className='text-[20px] font-bold uppercase'>{ticketInfor.showtimeTarget.movie.name}</h1>
                            <div className='flex w-full justify-between'>
                                <p className='text-[12px] font-extralight italic'>{ticketInfor.showtimeTarget.date}</p>
                                <div className='flex flex-col justify-center'>
                                    <p className=' text-[12px] font-extralight italic'>
                                        <span>{format(parseISO(ticketInfor.showtimeTarget.start_time), 'hh:mm')}</span>~
                                        <span>{format(parseISO(ticketInfor.showtimeTarget.end_time), 'hh:mm')}</span>
                                    </p>
                                    <p className='text-[12px] font-extralight italic'>
                                        {differenceInMinutes(
                                            ticketInfor.showtimeTarget.end_time,
                                            ticketInfor.showtimeTarget.start_time
                                        )}{' '}
                                        phút
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[14px] font-bold'>{ticketInfor.showtimeTarget.cinema.name}</h3>
                            </div>
                            <div className='text-[14px] font-bold capitalize'>
                                <p>{ticketInfor.showtimeTarget.theater.name}</p>
                            </div>
                            <div>
                                <p className='text-[14px] font-bold uppercase'>
                                    {ticketInfor.seats.map((item) => item.name).join(', ')}
                                </p>
                            </div>
                            <div>
                                <p className='text-[14px] font-bold uppercase'>
                                    CVG: {ticketInfor.concessions.map((item) => item.concession.name)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='flex items-center justify-between p-2'>
                            <span>Giá vé: </span>
                            <span>
                                {totalTicket.toLocaleString('de-DE')}
                                vnđ
                            </span>
                        </p>
                        <p className='flex items-center justify-between p-2'>
                            <span>Bắp nước: </span>
                            <span>
                                {totalConcession.toLocaleString('de-DE')}
                                vnđ
                            </span>
                        </p>
                        <p className='flex items-center justify-between p-2'>
                            <span>Phương thức thanh toán: </span>
                            <span className='text-[10px] font-thin italic'>{'(Tính năng đang cập nhật)'}</span>
                        </p>
                        <p className='my-4 flex items-center justify-between border-t border-white p-2 pt-5'>
                            <span>Tổng cộng: </span> <span>{totalPay.toLocaleString('de-DE')} vnđ</span>
                        </p>
                        <button
                            onClick={onRequest}
                            className='absolute bottom-5 right-5 rounded-md border border-red-500 p-2  transition-transform duration-150 ease-in-out hover:bg-red-500 active:translate-y-1'
                        >
                            Thanh toán
                        </button>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Payment;
