import MovieCard from '../MovieCard';
import Breadcrumbs from '../Breadcrumbs';
import { IMoviesShow } from '~/types/Showtime';

type IMovieShowcase = {
    title: string;
    data: IMoviesShow[];
    unEvent?: boolean;
    breadcrumbs?: boolean;
};
const MovieShowcase: React.FC<IMovieShowcase> = ({ title, data, unEvent, breadcrumbs }) => {
    return (
        <>
            {breadcrumbs && <Breadcrumbs />}
            <div className='container-box mx-auto my-4'>
                <div className='flex items-end justify-between border-b-[3.2px] border-[#241d1e]'>
                    <h1 className='py-5 text-4xl font-[400] text-[#222] '>{title}</h1>
                    <p className='text-md font-extralight uppercase text-[#666]'>{title}</p>
                </div>
                <div className='my-10 grid grid-cols-4 gap-3'>
                    {data.map((item, i) => (
                        <MovieCard unEvent={!!unEvent} movie={item} key={i} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MovieShowcase;
