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

const MovieSelection = ({ moviesNowShowing, loading }: { moviesNowShowing: IMovie[]; loading: boolean }) => {
    return (
        <>
            <div className='mx-auto my-8 mt-12 max-w-[978.4px]'>
                <Title name='movie selection' img='bg_movie_selection' />
                {loading && <Loading />}
                {!loading && moviesNowShowing && <Carousel data={moviesNowShowing} Item={MovieItem}></Carousel>}
            </div>
        </>
    );
};

export default MovieSelection;
