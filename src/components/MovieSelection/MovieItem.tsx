import clsx from 'clsx';
import styles from './MovieSelection.module.scss';
import Image from '~/assets';

const MovieItem = () => {
    return (
        <>
            <div className={clsx(styles.card, 'relative will-change-auto transition-all w-[240.3px] bg-white')}>
                <img className={clsx(styles.card_image, 'w-full inline-block')} src={Image.itemCard1} alt='' />
                <img className={clsx(styles.card__purchare, 'z-40 absolute top-0')} src={Image.iconPlayCard} alt='' />
                <div
                    className={clsx(
                        styles.card__purchare,
                        'bg-black text-white absolute w-full h-[84px] p-3 top-[76%]'
                    )}
                >
                    <p className='uppercase font-bold text-center mb-2'>Mật vụ ong</p>
                    <div className='flex justify-between uppercase text-sm font-semibold'>
                        <div className='bg-[#e71a0f] p-[6px] rounded-md px-2'>
                            <a href=''>Xem Chi tiết</a>
                        </div>
                        <div className='bg-[#e71a0f] p-[6px] rounded-md px-2'>
                            <a
                                className='relative ps-8 border border-[#f07469] border-solid rounded-md box-content p-[3px]'
                                href=''
                            >
                                <span className={clsx(styles.card_purchare_icon)}></span>Mua vé
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieItem;
