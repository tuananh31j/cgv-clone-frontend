import styles from './MovieCard.module.scss';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import Image from '~/assets';
import Tippy from '@tippyjs/react';
import Button from '../Button';
const MovieCard = () => {
    return (
        <div className='my-2'>
            <div className='w-[200px] h-[260px] relative inline-table border-4 border-black box-border'>
                <Tippy content='Mật vụ ong' delay={[0, 50]} placement='right'>
                    <a href=''>
                        <img src={Image.itemCard1} className='w-full  ' alt='' />
                    </a>
                </Tippy>
                <span className={clsx(styles.card_rating_t16__bg, 'w-10 h-10 indent-[-9999px] absolute top-2 left-2')}>
                    T16
                </span>
                <span
                    className={clsx(
                        { [styles.card_ribon_top1__bg]: false },
                        'w-20 h-20 indent-[-9999px] absolute -top-8 -right-14'
                    )}
                >
                    Top1
                </span>
                <span
                    className={clsx(
                        { [styles.card_web_69k__bg]: true },
                        'w-20 h-20 indent-[-9999px] absolute -top-4 -right-6'
                    )}
                >
                    69k
                </span>
            </div>
            <div>
                <h1 className='uppercase text-[#333333] font-bold text-lg'>Mật vụ ong</h1>
                <p>
                    <span className='font-semibold'>Thể loại:</span> Hàng động
                </p>
                <p>
                    <span className='font-semibold'>Thời lượng:</span> 105 phút
                </p>
                <p>
                    <span className='font-semibold'>Khởi chiếu:</span> 12-01-2024
                </p>
            </div>
            <div className=' w-[200px] mt-5'>
                <div className='flex items-end justify-between'>
                    <Button small href='dfd' classNames='bg-blue-600'>
                        <FontAwesomeIcon className='me-1' icon={faThumbsUp} />
                        Like <span>10</span>
                    </Button>
                    <Button inLine primary large iconDefault href='/pdfd'>
                        Mua vé
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
