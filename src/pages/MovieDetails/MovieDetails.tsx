import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Image from '~/assets';
import Button from '~/components/Button';
import ToggleTabs from '~/components/ToggleTabs';
import { useParams } from 'react-router-dom';
import { IMovie } from '~/types/Movie';
import movieApi from '~/api/movieApi';
import useDocumentTitle from '~/hooks/useDocumentTitle';
import MovieDialog from '~/components/MovieDialog';
import { useSelector } from 'react-redux';
import { RootState } from '~/store/store';

const MovieDetails = () => {
    const user = useSelector((state: RootState) => state.auth.login.currentUser.id);
    const { id } = useParams();
    const [movie, setMovie] = useState<IMovie>();
    useEffect(() => {
        (async () => {
            const { data } = await movieApi.getOne(id as string);
            setMovie(data);
        })();
    }, []);
    const Tab1 = (props: { desc: string }) => {
        return <span className='text-sm'>{props.desc}</span>;
    };

    const Tab2 = ({ trailer_embed }: { trailer_embed?: string }) => {
        const ytbEmbed = trailer_embed ? trailer_embed : 'gAmW3kvgMok';
        return <iframe width='560' height='315' src={`//www.youtube.com/embed/${ytbEmbed}`} allowFullScreen></iframe>;
    };
    useDocumentTitle(movie?.name || '');
    return (
        <div className='container-box'>
            <div className='mb-7 border-b-2 border-black'>
                <h1 className='py-4 text-3xl font-semibold'>Nội Dung Phim</h1>
            </div>
            {movie && (
                <>
                    <div className='mb-8 flex gap-6'>
                        <div className='relative '>
                            <img className='w-[300px]' src={movie.thumbnail} alt='' />
                        </div>
                        <div className='w-4/5'>
                            <div className='border-b-[1px] border-gray-300 '>
                                <h1 className='pb-7 text-2xl font-semibold uppercase'>{movie.name}</h1>
                            </div>
                            <div>
                                <p>
                                    <span className='font-bold'>Đạo diễn:</span> {movie.author}
                                </p>
                                <p>
                                    <span className='font-bold'>Diễn viên:</span> {movie.actors}
                                </p>
                                <p>
                                    <span className='font-bold'>Thể loại:</span> {movie.categories}
                                </p>
                                <p>
                                    <span className='font-bold'>Khởi chiếu:</span> {movie.createdAt}
                                </p>
                                <p>
                                    <span className='font-bold'>Thời lượng:</span> {movie.show_duration} phút
                                </p>
                                <p>
                                    <span className='font-bold'>Ngôn ngữ:</span> {movie.language}
                                </p>
                                {/* <p>
                                    <span className='font-bold'>Rated:</span>
                                    <span className='font-bold uppercase'>{movie.rated_id.name}</span>
                                </p>
                                <p>
                                    <span>T18</span>
                                    <span>starium</span>
                                </p> */}
                            </div>
                            <div className='mt-3 inline-flex items-end gap-3'>
                                <Button small className='bg-blue-600 text-white'>
                                    <FontAwesomeIcon className='me-1' icon={faThumbsUp} />
                                    Like <span>10</span>
                                </Button>
                                {user !== '' && (
                                    <MovieDialog movieID={movie._id}>
                                        <Button iconLeft={<img src={Image.iconPurchareTicket} />} large primary inLine>
                                            Mua vé
                                        </Button>
                                    </MovieDialog>
                                )}
                                {user === '' && (
                                    <Button
                                        to='/login'
                                        iconLeft={<img src={Image.iconPurchareTicket} />}
                                        large
                                        primary
                                        inLine
                                    >
                                        Mua vé
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                    <ToggleTabs
                        tabName={{
                            tab1: { name: 'Chi tiết', value: movie.description },
                            tab2: { name: 'Trailer', value: movie.trailer_embed },
                        }}
                        Content={{ Tab1, Tab2 }}
                    />
                </>
            )}
        </div>
    );
};

export default MovieDetails;
