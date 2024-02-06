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
    const images = [Image.slide1, Image.slide1, Image.slide1];

    const pickSlide = (index: number) => {
        (() => {
            clearInterval(timerId.current);
        })();
        setCurrentIndex(() => {
            const newTranslateX = -slideWith * index;

            if (slideElement.current) {
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
            const newTranslateX = -slideWith * nextIndex;

            if (slideElement.current) {
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
            const newTranslateX = -slideWith * nextIndex;

            if (slideElement.current) {
                slideElement.current.style.transform = `translateX(${newTranslateX}px)`;
            }
            return nextIndex;
        });
    };

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % data.length;
                const newTranslateX = -slideWith * nextIndex;

                if (slideElement.current) {
                    slideElement.current.style.transform = `translateX(${newTranslateX}px)`;
                }
                return nextIndex;
            });
        }, 2000);

        return () => {
            clearInterval(timerId.current);
        };
    }, [slideWith, data.length]);

    return (
        <>
            <div className={`flex justify-center my-5 mt-12 mx-auto max-w-[978.4px] overflow-hidden relative`}>
                <div
                    ref={slideElement}
                    className='whitespace-nowrap transition-transform will-change-transform relative duration-1000'
                >
                    {data.map((item, i) => {
                        return <SlideItem image={Image.slide1} key={i} />;
                    })}
                </div>
                <div className='absolute z-50 flex gap-2 bottom-0 '>
                    {data.map((item, i) => {
                        const activted = i === currentIndex;
                        return (
                            <button
                                onClick={() => pickSlide(i)}
                                key={item}
                                className={clsx('w-4 h-4 -indent-[9000px] bg-gray-700 rounded-full', {
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
                    className='absolute left-0 top-1/2 -translate-y-1/2 text-4xl px-2 text-white'
                >
                    <FontAwesomeIcon icon={faLessThan as IconProp} />
                </button>
                <button
                    onClick={nextSlide}
                    className='absolute right-0 top-1/2 -translate-y-1/2 text-4xl px-2 text-white'
                >
                    <FontAwesomeIcon icon={faGreaterThan as IconProp} />
                </button>
            </div>
        </>
    );
};

export default Slideshow;
