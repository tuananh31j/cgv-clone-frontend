import clsx from 'clsx';
import Image from '~/assets';
import styles from './MovieShowcase.module.scss';
import MovieCard from '../MovieCard';
import Breadcrumbs from '../Breadcrumbs';

const MovieShowcase = ({ title, data }: { title: string; data: number[] }) => {
    return (
        <>
            <Breadcrumbs />
            <div className='container-box mx-auto my-4'>
                <div className='flex items-end justify-between border-b-[3.2px] border-[#241d1e]'>
                    <h1 className='py-5 text-4xl font-[400] text-[#222] '>{title}</h1>
                    <a href='' className='text-2xl uppercase text-[#666]'>
                        {title === 'Phim sắp chiếu' && 'Phim đang chiếu'}
                        {title === 'Phim đang chiếu' && 'Phim sắp chiếu'}
                    </a>
                </div>
                <div className='my-10 grid grid-cols-4 gap-3'>
                    {data.map((item) => (
                        <MovieCard key={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MovieShowcase;
