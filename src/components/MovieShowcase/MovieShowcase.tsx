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
                <div className='border-b-[3.2px] border-[#241d1e] flex justify-between items-end'>
                    <h1 className='text-4xl font-[400] text-[#222] py-5 '>{title}</h1>
                    <a href='' className='uppercase text-2xl text-[#666]'>
                        {title === 'Phim sắp chiếu' && 'Phim đang chiếu'}
                        {title === 'Phim đang chiếu' && 'Phim sắp chiếu'}
                    </a>
                </div>
                <div className='grid grid-cols-4 gap-3 my-10'>
                    {data.map((item) => (
                        <MovieCard key={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MovieShowcase;
