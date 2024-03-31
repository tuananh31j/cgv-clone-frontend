import { format, parseISO } from 'date-fns';
import { IConcession } from '~/types/Concession';
import { IShowtime } from '~/types/Showtime';

type IBookingProgressProps = {
    ticketInfor: {
        showtimeTarget: IShowtime;
        concessions: { quanlity: number; concession: IConcession }[];
        seats: { index: number; name: string }[];
    };
    onClick: () => void;
};
const BookingProgress: React.FC<IBookingProgressProps> = ({ ticketInfor, onClick }) => {
    const totalConcession = ticketInfor.concessions.reduce(
        (init, item) => item.quanlity * item.concession.price + init,
        0
    );
    const totalTicket = ticketInfor.seats.length * ticketInfor.showtimeTarget.price;
    const totalPay = totalConcession + totalTicket;
    return (
        <>
            <div className='relative flex items-start justify-evenly rounded-xl border border-transparent bg-black p-4'>
                <div className='w-[7vw]'>
                    <img className='h-full w-full' src={ticketInfor.showtimeTarget.movie.thumbnail} alt='' />
                </div>
                <div className='max-w-[10vw] uppercase'>
                    <p className=''>{ticketInfor.showtimeTarget.movie.name}</p>
                    <p>{ticketInfor.showtimeTarget.theater.format.name}</p>
                    <p>{ticketInfor.showtimeTarget.movie.rated_id.name}</p>
                </div>
                <div className='max-w-[40vw]'>
                    <div className='flex items-center gap-4'>
                        <p>Rạp</p>
                        <p className='text-lg font-semibold'>{ticketInfor.showtimeTarget.cinema.name}</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p>Suất chiếu</p>
                        <p className='text-lg font-semibold'>
                            {format(parseISO(ticketInfor.showtimeTarget.start_time), 'hh:mm')},
                            {format(ticketInfor.showtimeTarget.date, 'yyyy-MM-dd')}
                        </p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p>Phòng chiếu</p>
                        <p className='text-lg font-semibold'>{ticketInfor.showtimeTarget.theater.name}</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p>Ghế</p>
                        <p className='text-lg font-semibold'>{ticketInfor.seats.map((item) => item.name).join('-')}</p>
                    </div>
                </div>
                <div>
                    <p>
                        Giá vé:
                        <span className='text-lg font-semibold'>{totalTicket.toLocaleString('de-DE')} vnđ</span>
                    </p>
                    <p>
                        Combo:
                        <span className='text-lg font-semibold'>{totalConcession.toLocaleString('de-DE')} vnđ</span>
                    </p>
                    <p>
                        Tổng: <span className='text-lg font-semibold'>{totalPay.toLocaleString('de-DE')} vnđ</span>
                    </p>
                </div>
                <button
                    onClick={onClick}
                    className='absolute bottom-3 right-3 rounded-md border-b border-red-500 p-2 transition-all  duration-150 ease-in-out hover:border-transparent hover:text-red-500 hover:underline active:translate-y-1 active:border-red-500 active:no-underline'
                >
                    Tiếp tục <span className=' font-extrabold'>{'>'}</span>
                </button>
            </div>
        </>
    );
};

export default BookingProgress;
