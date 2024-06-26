import styles from './MovieCard.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Image from '~/assets';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import MovieDialog from '../MovieDialog';
import Button from '../Button';
import { format } from 'date-fns';
import { IMoviesShow } from '~/types/Showtime';
import { useSelector } from 'react-redux';
import { RootState } from '~/store/store';

type IMovieCardProps = { movie: IMoviesShow; unEvent: boolean };

const MovieCard: React.FC<IMovieCardProps> = ({ movie, unEvent }) => {
    const user = useSelector((state: RootState) => state.auth.login.currentUser.id);
    return (
        <div className='my-2'>
            <div className='relative box-border inline-table h-[260px] w-[200px] border-4 border-black'>
                <Tippy content={movie.movieDetails.name} delay={[100, 50]} placement='right'>
                    <Link to={`/movies/${movie._id.movie}`}>
                        <img
                            src={movie.movieDetails.thumbnail}
                            className='h-[300px] w-full cursor-pointer object-cover'
                            alt=''
                        />
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
            <div className='flex flex-shrink-0 flex-col'>
                <Tippy content={movie.movieDetails.name} delay={[100, 50]} placement='top'>
                    <h1 className='max-w-[198px] truncate  text-nowrap text-lg font-bold uppercase text-[#333333]'>
                        {movie.movieDetails.name}
                    </h1>
                </Tippy>

                <p className='max-w-[198px] truncate'>
                    <span className='font-semibold'>Thể loại: </span>
                    {movie.movieDetails.categories}
                </p>
                <p>
                    <span className='font-semibold'>Thời lượng:</span> {movie.movieDetails.show_duration} phút
                </p>
                <p>
                    <span className='font-semibold'>Khởi chiếu:</span> {format(movie.date, 'dd-MM-yyyy')}
                </p>
            </div>
            {!unEvent && (
                <div className=' mt-5 w-[200px]'>
                    <div className='flex items-end justify-between'>
                        <Button
                            onClick={() => console.log('oo')}
                            className='rounded-md border bg-blue-600 p-1 text-white'
                        >
                            <FontAwesomeIcon className='me-1' icon={faThumbsUp} />
                            Like <span>{movie.movieDetails.liked}</span>
                        </Button>
                        {user !== '' && (
                            <MovieDialog movieID={movie._id.movie}>
                                <Button iconLeft={<img src={Image.iconPurchareTicket} />} large primary inLine>
                                    Mua vé
                                </Button>
                            </MovieDialog>
                        )}
                        {user === '' && (
                            <Button to='/login' iconLeft={<img src={Image.iconPurchareTicket} />} large primary inLine>
                                Mua vé
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieCard;
