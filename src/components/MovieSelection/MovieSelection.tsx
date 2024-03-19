import clsx from 'clsx';
import styles from './MovieSelection.module.scss';

import Title from '../Title';
import Carousel from '../Carousel';

import MovieItem from './MovieItem';
import { useCallback, useEffect, useState } from 'react';
import { IShowtime } from '~/types/Showtime';
import showtimeApi from '~/api/showtimeApi';
import movieApi from '~/api/movieApi';
import { IMovie } from '~/types/Movie';
import useAsync from '~/hooks/useAsync';
import Loading from '../Loading';

const MovieSelection = () => {
    // const [moviesNowShowing, setMoviesNoeShowing] = useState<IMovie[]>([]);
    const getMoviesNowShowing = useCallback(async () => {
        const { data: moviesShowtime } = await showtimeApi.getAll();
        const { data: movies } = await movieApi.getAll();
        const listMovieNowShowing = movies.filter((movie, i) =>
            moviesShowtime.find((item) => item.movie._id === movie._id)
        );
        return listMovieNowShowing;
    }, []);
    const { value: moviesNowShowing, loading, error } = useAsync<IMovie[]>(getMoviesNowShowing);

    // useEffect(() => {
    //     (async () => {
    //         const { data: moviesShowtime } = await showtimeApi.getAll();
    //         const { data: movies } = await movieApi.getAll();
    //         const listMovieNowShowing = movies.filter((movie, i) =>
    //             moviesShowtime.find((item) => item.movie._id === movie._id)
    //         );
    //         setMoviesNoeShowing(listMovieNowShowing);
    //     })();
    // }, []);

    return (
        <>
            <div className='mx-auto my-8 mt-12 max-w-[978.4px]'>
                <Title name='movie selection' img='bg_movie_selection' />
                {loading && <Loading />}
                {!loading && !error && moviesNowShowing && (
                    <Carousel data={moviesNowShowing} Item={MovieItem}></Carousel>
                )}
            </div>
        </>
    );
};

export default MovieSelection;
