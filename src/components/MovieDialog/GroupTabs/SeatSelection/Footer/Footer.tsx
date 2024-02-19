import Seat from '../Seat';

const Footer = () => {
    return (
        <div className='grid grid-rows-3 grid-cols-3 justify-center items-center my-10 gap-4 w-[30vw] mx-auto'>
            <div className='flex gap-2 items-center'>
                <Seat type='normal'></Seat>
                <span>Thường</span>
            </div>
            <div className='flex gap-2 items-center'>
                <Seat type='vip'></Seat>
                <span>VIP</span>
            </div>
            <div className='flex gap-2 items-center'>
                <Seat type='reservedSeat'></Seat>
                <span>Đã chọn</span>
            </div>
            <div className='flex gap-2 items-center'>
                <Seat type='double'></Seat>
                <span>Đôi</span>
            </div>
        </div>
    );
};

export default Footer;
