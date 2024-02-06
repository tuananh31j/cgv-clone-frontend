import clsx from 'clsx';
import styles from './MovieSelection.module.scss';
import Image from '~/assets';
import Button from '../Button';

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
                    <div className='flex justify-between items-center uppercase text-sm font-semibold'>
                        <Button large href='/ok' primary>
                            Xem chi tiết
                        </Button>
                        <Button iconDefault large href='/oôk' primary inLine>
                            Mua vé
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieItem;
