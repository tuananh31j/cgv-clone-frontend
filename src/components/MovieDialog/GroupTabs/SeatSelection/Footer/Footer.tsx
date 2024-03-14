import Seat from '../Seat';

const Footer = () => {
    return (
        <div className='mx-auto my-10 grid w-[30vw] grid-cols-3 grid-rows-3 items-center justify-center gap-4'>
            <div className='flex items-center gap-2'>
                <Seat type='normal'></Seat>
                <span>Thường</span>
            </div>
            <div className='flex items-center gap-2'>
                <Seat type='vip'></Seat>
                <span>VIP</span>
            </div>
            <div className='flex items-center gap-2'>
                <Seat type='reservedSeat'></Seat>
                <span>Đã chọn</span>
            </div>
            <div className='flex items-center gap-2'>
                <Seat type='double'></Seat>
                <span>Đôi</span>
            </div>
        </div>
    );
};

export default Footer;
