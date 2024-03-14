import Image from '~/assets';

const BookingProgress = () => {
    return (
        <>
            <div className='flex items-start justify-evenly rounded-xl border border-transparent bg-black p-4'>
                <div className='w-[7vw]'>
                    <img className='h-full w-full' src={Image.itemCard1} alt='' />
                </div>
                <div className='max-w-[10vw] uppercase'>
                    <p className=''>Gia dinh x diep vien ma: trang</p>
                    <p>2d</p>
                    <p>t13</p>
                </div>
                <div className='max-w-[20vw]'>
                    <div className='flex items-center gap-4'>
                        <p>Rap</p>
                        <p className='text-lg font-semibold'>CGV Hung Vuong Plaza</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p>Suat chieu</p>
                        <p className='text-lg font-semibold'>21:50, 20/02/2024</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p>Phong chieu</p>
                        <p className='text-lg font-semibold'>Cimena 2</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p>Ghe</p>
                        <p className='text-lg font-semibold'>Vip J8, J7</p>
                    </div>
                </div>
                <div>
                    <p>
                        Gia ve: <span className='text-lg font-semibold'>500000000</span>
                    </p>
                    <p>
                        Combo: <span className='text-lg font-semibold'>500000000</span>
                    </p>
                    <p>
                        Tong: <span className='text-lg font-semibold'>700000000000</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default BookingProgress;
