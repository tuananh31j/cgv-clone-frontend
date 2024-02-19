import { useState } from 'react';
import Image from '~/assets';

const Item = () => {
    const [quantity, setQuantity] = useState<number>(0);
    const increase = () => {
        console.log('in', quantity);

        setQuantity((prev) => {
            if (prev < 4) return prev + 1;

            return prev;
        });
    };
    const decrease = () => {
        console.log('de');

        setQuantity((prev) => {
            if (prev > 0) return prev - 1;

            return prev;
        });
    };
    return (
        <>
            <div className='grid grid-cols-2 gap-7 items-start'>
                <div>
                    <img src={Image.bimbim} alt='' />
                </div>
                <div className='flex flex-col justify-start text-start mt-5'>
                    <h1 className='font-semibold uppercase'>MILO COMBO 202</h1>
                    <p>1 milo lớn + 1 nước ngọt siêu lớn + 1 bắp ngọt lớn</p>
                    <div className='font-light'>
                        <p>- Nhận trong ngày xem phim.</p>
                        <p>- Nhận trong ngày xem phim.</p>
                        <p>- Nhận trong ngày xem phim.</p>
                    </div>
                    <p>
                        Giá: <span className='font-semibold'>999999999vnd</span>
                    </p>
                    <div className='flex gap-4 my-2'>
                        <button onClick={decrease} className='w-7 text-xl font-bold h-10 bg-red-600 '>
                            -
                        </button>
                        <div className='w-10 text-xl font-bold h-10 bg-white text-black texxt-center flex flex-col justify-center items-center'>
                            <span>{quantity}</span>
                        </div>
                        <button onClick={increase} className='w-7 text-xl font-bold h-10 bg-red-600 '>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Item;
