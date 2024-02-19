import Image from '~/assets';

const BookingProgress = () => {
    return (
        <>
            <div className='flex justify-evenly p-4 bg-black border border-transparent rounded-xl items-start'>
                <div className='w-[7vw]'>
                    <img className='w-full h-full' src={Image.itemCard1} alt='' />
                </div>
                <div className='uppercase max-w-[10vw]'>
                    <p className=''>Gia dinh x diep vien ma: trang</p>
                    <p>2d</p>
                    <p>t13</p>
                </div>
                <div className='max-w-[20vw]'>
                    <div className='flex gap-4 items-center'>
                        <p>Rap</p>
                        <p className='font-semibold text-lg'>CGV Hung Vuong Plaza</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <p>Suat chieu</p>
                        <p className='font-semibold text-lg'>21:50, 20/02/2024</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <p>Phong chieu</p>
                        <p className='font-semibold text-lg'>Cimena 2</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <p>Ghe</p>
                        <p className='font-semibold text-lg'>Vip J8, J7</p>
                    </div>
                </div>
                <div>
                    <p>
                        Gia ve: <span className='font-semibold text-lg'>500000000</span>
                    </p>
                    <p>
                        Combo: <span className='font-semibold text-lg'>500000000</span>
                    </p>
                    <p>
                        Tong: <span className='font-semibold text-lg'>700000000000</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default BookingProgress;
