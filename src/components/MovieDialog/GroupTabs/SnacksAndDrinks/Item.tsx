import { useState } from 'react';
import Image from '~/assets';
import { IConcession } from '~/types/Concession';

const Item = ({ concession }: { concession: IConcession }) => {
    const [quantity, setQuantity] = useState<number>(0);
    const increase = () => {
        setQuantity((prev) => {
            if (prev < 4) return prev + 1;

            return prev;
        });
    };
    const decrease = () => {
        setQuantity((prev) => {
            if (prev > 0) return prev - 1;
            return prev;
        });
    };
    return (
        <>
            <div className='grid grid-cols-2 items-start gap-7'>
                <div>
                    <img src={concession.image} alt='' />
                </div>
                <div className='mt-5 flex flex-col justify-start text-start'>
                    <h1 className='font-semibold uppercase'>{concession.name}</h1>
                    <div className='font-light'>
                        {concession.description.map((item, i) => (
                            <p>- {item}</p>
                        ))}
                    </div>
                    <p>
                        Giá: <span className='font-semibold'>{concession.price}vnd</span>
                    </p>
                    <div className='my-2 flex gap-4'>
                        <button onClick={decrease} className='h-10 w-7 bg-red-600 text-xl font-bold '>
                            -
                        </button>
                        <div className='texxt-center flex h-10 w-10 flex-col items-center justify-center bg-white text-xl font-bold text-black'>
                            <span>{quantity}</span>
                        </div>
                        <button onClick={increase} className='h-10 w-7 bg-red-600 text-xl font-bold '>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Item;
