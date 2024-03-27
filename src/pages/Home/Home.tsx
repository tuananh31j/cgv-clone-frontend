import clsx from 'clsx';
import style from './Home.module.scss';
import Slideshow from '~/components/Slideshow';
import MovieSelection from '~/components/MovieSelection';
import Event from '~/components/Event';
import useAsync from '~/hooks/useAsync';
import { IBanner } from '~/types/Banner';
import bannerApi from '~/api/bannerApi';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import showtimeApi from '~/api/showtimeApi';
import { IMovie } from '~/types/Movie';
import useDocumentTitle from '~/hooks/useDocumentTitle';
import Loading from '~/components/Loading';

const HomePage = () => {
    useDocumentTitle('Trang chủ');

    const { value: banners, loading: bannerLoading } = useAsync<IBanner[] | []>(async () => {
        try {
            const { data } = await bannerApi.getBannerActive();
            return data;
        } catch (error) {
            return [];
        }
    });
    const getMoviesNowShowing = useCallback(async () => {
        const { data: movies } = await showtimeApi.getMoviesNowShowing();
        const listMovieNowShowing = movies.map((movie, i) => movie.movieDetails);
        return listMovieNowShowing;
    }, []);
    const { value: moviesNowShowing, loading: movieLoading } = useAsync<IMovie[]>(getMoviesNowShowing);
    return (
        <>
            <div className='container-box mx-auto mt-8'>
                <div>
                    <div className='wibget mt-7 border-b border-solid border-black'>
                        <ul
                            className={clsx(
                                style.wibget__nav,
                                ' mb-[10px] flex gap-4 border-b border-solid border-black pb-9 '
                            )}
                        >
                            <li>
                                <Link className='theater' to='/'>
                                    cgv theater
                                </Link>
                            </li>
                            <li>
                                <Link className='now-sh' to='/showing.html/'>
                                    now showing
                                </Link>
                            </li>
                            <li>
                                <Link className='special' to='/gold-class'>
                                    cgv special
                                </Link>
                            </li>
                            <li>
                                <Link className='event' to='/'>
                                    Mua voucher, thẻ quả tặng CGV
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>my ticket info</Link>
                            </li>
                            <li>
                                <Link to={'/'}> discount info</Link>
                            </li>
                            <li>
                                <Link to={'/'}>create account quick</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={clsx(style.content, 'h-[447.26px]')}>
                {banners && <Slideshow data={banners} />} {bannerLoading && <Loading />}
            </div>
            <MovieSelection moviesNowShowing={moviesNowShowing} loading={movieLoading} />
            <Event />
        </>
    );
};

export default HomePage;
