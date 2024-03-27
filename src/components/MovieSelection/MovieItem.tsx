import clsx from 'clsx';
import styles from './MovieSelection.module.scss';
import Image from '~/assets';
import Button from '../Button';
import { forwardRef } from 'react';
import MovieDialog from '../MovieDialog';
import { IMovie } from '~/types/Movie';
import { useSelector } from 'react-redux';
import { RootState } from '~/store/store';

interface IMovieProps {
    item: IMovie;
}

const MovieItem = forwardRef<HTMLImageElement, IMovieProps>(({ item }, ref) => {
    const user = useSelector((state: RootState) => state.auth.login.currentUser.id);
    return (
        <>
            <div className={clsx(styles.card, 'relative w-[240.3px] bg-white transition-all will-change-auto')}>
                <img
                    ref={ref}
                    className={clsx(styles.card_image, 'inline-block h-full w-full object-cover')}
                    src={item.thumbnail}
                    alt=''
                />
                <img className={clsx(styles.card__purchare, ' absolute top-0')} src={Image.iconPlayCard} alt='' />
                <div
                    className={clsx(
                        styles.card__purchare,
                        'absolute top-[76%] h-[84px] w-full bg-black p-3 text-white'
                    )}
                >
                    <p className='mb-2 text-center font-bold uppercase'>{item.name}</p>
                    <div className='flex items-center justify-between text-sm font-semibold uppercase'>
                        <Button large to={`movies/${item._id}`} primary>
                            Xem chi tiết
                        </Button>
                        {user !== '' && (
                            <MovieDialog movieID={item._id}>
                                <Button iconLeft={<img src={Image.iconPurchareTicket} />} large primary inLine>
                                    Mua vé
                                </Button>
                            </MovieDialog>
                        )}
                        {user === '' && (
                            <Button to='login' iconLeft={<img src={Image.iconPurchareTicket} />} large primary inLine>
                                Mua vé
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
});

export default MovieItem;
