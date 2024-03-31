import { useCallback } from 'react';
import showtimeApi from '~/api/showtimeApi';
import Loading from '~/components/Loading';
import MovieShowcase from '~/components/MovieShowcase';
import useAsync from '~/hooks/useAsync';
import useDocumentTitle from '~/hooks/useDocumentTitle';
import { IMoviesShow } from '~/types/Showtime';

const MoviesNowShowing = () => {
    useDocumentTitle('Phim đang chiếu');

    const getMovies = useCallback(async () => {
        const { data: movies } = await showtimeApi.getMoviesNowShowing();

        return movies;
    }, []);
    const { value: moviesNowShowing, loading } = useAsync<IMoviesShow[]>(getMovies);
    return (
        <>
            {loading && <Loading />}
            {moviesNowShowing && <MovieShowcase breadcrumbs title='Phim đang chiếu' data={moviesNowShowing} />}
        </>
    );
};

export default MoviesNowShowing;
