import { useCallback } from 'react';
import showtimeApi from '~/api/showtimeApi';
import Loading from '~/components/Loading';
import MovieShowcase from '~/components/MovieShowcase';
import useAsync from '~/hooks/useAsync';
import { IMoviesShow } from '~/types/Showtime';

const MoviesComingSoon = () => {
    const getMovies = useCallback(async () => {
        const { data: movies } = await showtimeApi.getMoviesComingSoon();

        return movies;
    }, []);
    const { value: moviesComingSoon, loading } = useAsync<IMoviesShow[]>(getMovies);
    return (
        <>
            {loading && <Loading />}
            {moviesComingSoon && <MovieShowcase unEvent title='Phim sắp chiếu' data={moviesComingSoon} />}
        </>
    );
};

export default MoviesComingSoon;
