import clsx from 'clsx';
import styles from './MovieSelection.module.scss';

import Title from '../Title';
import Carousel from '../Carousel';

import MovieItem from './MovieItem';

const MovieSelection = () => {
    const data = [1, 2, 3, 4, 5];
    return (
        <>
            <div className='max-w-[978.4px] mx-auto my-8 mt-12'>
                <Title name='movie selection' img='bg_movie_selection' />
                <Carousel dataLength={data.length}>
                    {data.map((item) => (
                        <MovieItem key={item} />
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default MovieSelection;
