import { useEffect, useState } from 'react';
import { IConcession } from '~/types/Concession';

type ISnackItemProps = {
    concession: IConcession;
    selectedConcessions: { quanlity: number; concession: IConcession }[];
    handleConcession: ({ quanlity, concession }: { quanlity: number; concession: IConcession }) => void;
};

const SnackItem: React.FC<ISnackItemProps> = ({ concession, handleConcession, selectedConcessions }) => {
    const resultConcession = selectedConcessions.find((item) => item.concession._id === concession._id);
    const [concessionTarget, setConcessionTarget] = useState<{ quanlity: number; concession: IConcession }>({
        quanlity: resultConcession ? resultConcession.quanlity : 0,
        concession,
    });
    const increase = () => {
        setConcessionTarget((prev) => {
            if (prev.quanlity < 4) return { ...prev, quanlity: prev.quanlity + 1 };

            return prev;
        });
    };
    const decrease = () => {
        setConcessionTarget((prev) => {
            if (prev.quanlity > 0) return { ...prev, quanlity: prev.quanlity - 1 };
            return prev;
        });
    };
    useEffect(() => {
        handleConcession(concessionTarget);
    }, [concessionTarget, handleConcession]);
    return (
        <>
            <div className='grid grid-cols-2 items-center gap-7'>
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
                        Giá: <span className='font-semibold'>{concession.price.toLocaleString('de-DE')} vnd</span>
                    </p>
                    <div className='my-2 flex gap-4'>
                        <button onClick={decrease} className='h-10 w-7 bg-red-600 text-xl font-bold '>
                            -
                        </button>
                        <div className='texxt-center flex h-10 w-10 flex-col items-center justify-center bg-white text-xl font-bold text-black'>
                            <span>{concessionTarget.quanlity}</span>
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

export default SnackItem;
