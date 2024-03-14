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
import useFetch from '~/hooks/useFetch';

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
    const { data: moviesNowShowing, loading, error } = useFetch<IMovie[]>(getMoviesNowShowing);

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
                {loading && (
                    <div className='flex h-20 w-full flex-col items-center justify-center'>
                        <div className='h-8 w-8 animate-spin rounded-full border-4 border-dotted border-black transition-all'></div>
                    </div>
                )}
                {!loading && !error && moviesNowShowing && (
                    <Carousel data={moviesNowShowing} Item={MovieItem}></Carousel>
                )}
                {/* 
                <div className='h-20 w-full flex flex-col justify-center items-center'>
                    <div className='h-8 w-8 border-4 border-black rounded-full border-dotted transition-all animate-spin'></div>
                </div> */}
            </div>
        </>
    );
};

export default MovieSelection;
