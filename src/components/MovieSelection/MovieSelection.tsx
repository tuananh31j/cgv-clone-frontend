import Title from '../Title';
import Carousel from '../Carousel';

import MovieItem from './MovieItem';
import { IMovie } from '~/types/Movie';
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
