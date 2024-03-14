import Image from '~/assets';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { useEffect, useRef, useState } from 'react';

import SlideItem from './SlideItem';

import clsx from 'clsx';
import styles from './Slideshow.module.scss';

const Slideshow = ({ slideWith, data }: { slideWith: number; data: number[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideElement = useRef<HTMLDivElement>(null);
    const timerId = useRef<NodeJS.Timeout>();
    const itemCard = useRef<HTMLImageElement>(null);
    const pickSlide = (index: number) => {
        (() => {
            clearInterval(timerId.current);
        })();
        setCurrentIndex(() => {
            if (slideElement.current && itemCard.current) {
                const newTranslateX = -itemCard.current.clientWidth * index;
                slideElement.current.style.transform = `translateX(${newTranslateX}px)`;
            }
            return index;
        });
    };

    const nextSlide = () => {
        (() => {
            clearInterval(timerId.current);
        })();
        setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % data.length;

            if (slideElement.current && itemCard.current) {
                const newTranslateX = -itemCard.current.clientWidth * nextIndex;
                slideElement.current.style.transform = `translateX(${newTranslateX}px)`;
            }
            return nextIndex;
        });
    };

    const prevSlide = () => {
        (() => {
            clearInterval(timerId.current);
        })();
        setCurrentIndex((prevIndex) => {
            let nextIndex = 0;
            if (prevIndex <= 0) {
                nextIndex = 2;
            } else {
                nextIndex = prevIndex - 1;
            }

            if (slideElement.current && itemCard.current) {
                const newTranslateX = -itemCard.current.clientWidth * nextIndex;
                slideElement.current.style.transform = `translateX(${newTranslateX}px)`;
            }
            return nextIndex;
        });
    };

    // useEffect(() => {
    //     timerId.current = setInterval(() => {
    //         setCurrentIndex((prevIndex) => {
    //             const nextIndex = (prevIndex + 1) % data.length;
    //             const newTranslateX = -itemCard.current * nextIndex;

    //             if (slideElement.current) {
    //                 slideElement.current.style.transform = `translateX(${newTranslateX}px)`;
    //             }
    //             return nextIndex;
    //         });
    //     }, 4000);

    //     return () => {
    //         clearInterval(timerId.current);
    //     };
    // }, [itemCard.current, data.length]);

    return (
        <>
            <div className={`relative mx-auto my-5 mt-12 flex max-w-[978.4px] justify-center overflow-hidden`}>
                <div
                    ref={slideElement}
                    className='relative whitespace-nowrap transition-transform duration-1000 will-change-transform'
                >
                    {data.map((item, i) => {
                        return <SlideItem test={i} ref={itemCard} image={Image.slide1} key={i} />;
                    })}
                </div>
                <div className='absolute bottom-0 z-50 flex gap-2 '>
                    {data.map((item, i) => {
                        const activted = i === currentIndex;
                        return (
                            <button
                                onClick={() => pickSlide(i)}
                                key={item}
                                className={clsx('h-4 w-4 rounded-full bg-gray-700 -indent-[9000px]', {
                                    [styles.active]: activted,
                                })}
                            >
                                1
                            </button>
                        );
                    })}
                </div>
                <button
                    onClick={prevSlide}
                    className='absolute left-0 top-1/2 -translate-y-1/2 px-2 text-4xl text-white'
                >
                    <FontAwesomeIcon icon={faLessThan as IconProp} />
                </button>
                <button
                    onClick={nextSlide}
                    className='absolute right-0 top-1/2 -translate-y-1/2 px-2 text-4xl text-white'
                >
                    <FontAwesomeIcon icon={faGreaterThan as IconProp} />
                </button>
            </div>
        </>
    );
};

export default Slideshow;
