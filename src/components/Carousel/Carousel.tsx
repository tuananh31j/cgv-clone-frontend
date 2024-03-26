import clsx from 'clsx';
import styles from './Carousel.module.scss';
import React, { ReactNode, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { IShowtime } from '~/types/Showtime';
import { MovieItem } from '../MovieSelection';
import { IMovie } from '~/types/Movie';

interface ICarouselProps {
    Item: React.ElementType;
    data: IMovie[] | number[];
}
const Carousel: React.FC<ICarouselProps> = ({ Item, data }) => {
    const carouselElement = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const itemSlide = useRef<HTMLImageElement>(null);
    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const nextIndex = (prev + 1) % (data.length - 3);

            if (carouselElement.current && itemSlide.current) {
                const newTranslateX = (itemSlide.current.clientWidth + 4) * nextIndex * -1;
                carouselElement.current.style.transform = `translateX(${newTranslateX}px)`;
            }
            return nextIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            const nextIndex = (prev - 1) % (data.length - 3);
            if (carouselElement.current && itemSlide.current) {
                const newTranslateX = (itemSlide.current.clientWidth + 4) * nextIndex * -1;
                carouselElement.current.style.transform = `translateX(${newTranslateX}px)`;
            }
            return nextIndex;
        });
    };
    return (
        <>
            <div className='content  relative  '>
                <div className=' m-w-[978.4px] overflow-hidden'>
                    <div
                        ref={carouselElement}
                        className='inline-flex gap-[4.8px]  whitespace-nowrap  bg-white duration-1000 will-change-transform '
                    >
                        {data.map((item, i) => (
                            <Item ref={itemSlide} item={item} key={i} />
                        ))}
                    </div>
                </div>

                {data.length > 5 && (
                    <>
                        {currentIndex !== 0 && (
                            <>
                                <span className='absolute -left-[2.6rem] top-[50%] -z-50 inline-block h-20 w-20  -translate-y-1/2 rounded-full  bg-[#e71a0f]'></span>
                                <button
                                    onClick={prevSlide}
                                    className='absolute -left-[3.2rem] top-[50%] z-50   flex -translate-y-1/2  items-center  rounded-full   p-6   text-2xl '
                                >
                                    <FontAwesomeIcon className=' text-3xl text-white' icon={faLessThan} />
                                </button>
                            </>
                        )}
                        {currentIndex !== data.length - 4 && (
                            <>
                                <span className='absolute -right-[2.4rem] top-[50%] -z-50 inline-block h-20 w-20  -translate-y-1/2 rounded-full  bg-[#e71a0f]'></span>
                                <button
                                    onClick={nextSlide}
                                    className='absolute -right-[3.6rem] top-[50%] flex -translate-y-1/2  items-center  rounded-full p-6  px-8   text-2xl '
                                >
                                    <FontAwesomeIcon className=' text-3xl text-white' icon={faGreaterThan} />
                                </button>
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Carousel;
