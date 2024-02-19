import clsx from 'clsx';
import styles from './Carousel.module.scss';
import React, { ReactNode, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';

interface ICarouselProps {
    children: ReactNode;
    dataLength: number;
}
const Carousel: React.FC<ICarouselProps> = ({ children, dataLength }) => {
    const carouselElement = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const nextIndex = (prev + 1) % (dataLength - 3);
            const newTranslateX = 244.8 * nextIndex * -1;
            if (carouselElement.current) {
                carouselElement.current.style.transform = `translateX(${newTranslateX}px)`;
            }
            return nextIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            const nextIndex = (prev - 1) % (dataLength - 3);
            const newTranslateX = 244.8 * nextIndex * -1;
            if (carouselElement.current) {
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
                        className='inline-flex gap-[0.3rem]  whitespace-nowrap  will-change-transform bg-white duration-1000 '
                    >
                        {children}
                    </div>
                </div>

                {currentIndex !== 0 && (
                    <>
                        <span className='h-20 absolute w-20 top-[50%] -translate-y-1/2 -left-[2.6rem] -z-50  bg-[#e71a0f] inline-block  rounded-full'></span>
                        <button
                            onClick={prevSlide}
                            className='absolute z-50 top-[50%] -translate-y-1/2   flex items-center  -left-[3.2rem]  p-6   rounded-full   text-2xl '
                        >
                            <FontAwesomeIcon className=' text-3xl text-white' icon={faLessThan} />
                        </button>{' '}
                    </>
                )}

                {currentIndex !== dataLength - 4 && (
                    <>
                        <span className='h-20 absolute w-20 top-[50%] -translate-y-1/2 -right-[2.4rem] -z-50  bg-[#e71a0f] inline-block  rounded-full'></span>
                        <button
                            onClick={nextSlide}
                            className='absolute top-[50%] -translate-y-1/2 flex items-center  -right-[3.6rem]  p-6 px-8  rounded-full   text-2xl '
                        >
                            <FontAwesomeIcon className=' text-3xl text-white' icon={faGreaterThan} />
                        </button>
                    </>
                )}
            </div>
        </>
    );
};

export default Carousel;
