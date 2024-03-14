import styles from './MovieCard.module.scss';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import Image from '~/assets';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import MovieDialog from '../MovieDialog';
import Button from '../Button';
const MovieCard = () => {
    return (
        <div className='my-2'>
            <div className='relative box-border inline-table h-[260px] w-[200px] border-4 border-black'>
                <Tippy content='Mật vụ ong' delay={[1000, 50]} placement='right'>
                    <Link to={'/movies/1'}>
                        <img src={Image.itemCard1} className='w-full cursor-pointer' alt='' />
                    </Link>
                </Tippy>
                <span className={clsx(styles.card_rating_t16__bg, 'absolute left-2 top-2 h-10 w-10 indent-[-9999px]')}>
                    T16
                </span>
                <span
                    className={clsx(
                        { [styles.card_ribon_top1__bg]: false },
                        'absolute -right-14 -top-8 h-20 w-20 indent-[-9999px]'
                    )}
                >
                    Top1
                </span>
                <span
                    className={clsx(
                        { [styles.card_web_69k__bg]: true },
                        'absolute -right-6 -top-4 h-20 w-20 indent-[-9999px]'
                    )}
                >
                    69k
                </span>
            </div>
            <div>
                <h1 className='text-lg font-bold uppercase text-[#333333]'>Mật vụ ong</h1>
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
            <div className=' mt-5 w-[200px]'>
                <div className='flex items-end justify-between'>
                    <Button onClick={() => console.log('oo')} className='bg-blue-600 text-white'>
                        <FontAwesomeIcon className='me-1' icon={faThumbsUp} />
                        Like <span>10</span>
                    </Button>
                    <MovieDialog movieID={'tesst'}>
                        <Button
                            className='text-white'
                            inLine
                            primary
                            large
                            iconLeft={<img src={Image.iconPurchareTicket}></img>}
                        >
                            Mua vé
                        </Button>
                    </MovieDialog>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
