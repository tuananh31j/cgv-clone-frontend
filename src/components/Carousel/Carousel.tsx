import clsx from 'clsx';
import styles from './Carousel.module.scss';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';

import { MovieItem } from '../MovieSelection';
import { EventItem } from '../Event';

const Carousel = ({ item, data }: { item: string; data: number[] }) => {
    const carouselElement = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const nextIndex = (prev + 1) % data.length;
            const newTranslateX = 244.8 * nextIndex * -1;
            if (carouselElement.current) {
                carouselElement.current.style.transform = `translateX(${newTranslateX}px)`;
            }
            console.log(nextIndex);

            return nextIndex;
        });
    };
    return (
        <>
            <div className='content  relative  '>
                <div className=' m-w-[978.4px] overflow-hidden'>
                    <div
                        ref={carouselElement}
                        className='inline-flex gap-[0.3rem] whitespace-nowrap  will-change-transform  duration-1000 '
                    >
                        {item === 'movie' && data.map(() => <MovieItem />)}
                        {item === 'event' && data.map(() => <EventItem />)}
                    </div>
                </div>
                <button className='absolute top-[50%] -translate-y-1/2 flex items-center -z-50 -left-[4.5rem]  p-6 px-8  rounded-full   text-2xl '>
                    <span className='h-20 w-20 bg-[#e71a0f] inline-block  rounded-full'></span>
                    <FontAwesomeIcon className='-ms-[4.2rem] text-3xl text-white' icon={faLessThan} />
                </button>
                <button
                    onClick={nextSlide}
                    className='absolute top-[50%] -translate-y-1/2 flex items-center -z-50 -right-[3.5rem]  p-6 px-8  rounded-full   text-2xl '
                >
                    <span className='h-20 w-20 bg-[#e71a0f] inline-block -me-8  rounded-full'></span>
                    <FontAwesomeIcon className=' text-3xl text-white' icon={faGreaterThan} />
                </button>
            </div>
        </>
    );
};

export default Carousel;
