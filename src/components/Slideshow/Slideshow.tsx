import Image from '~/assets';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useRef, useState } from 'react';
import SlideItem from './SlideItem';
import clsx from 'clsx';
import styles from './Slideshow.module.scss';

const Slideshow = ({ slideWith, containerWith }: { slideWith: number; containerWith: number }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideElement = useRef<HTMLDivElement>(null);

    const timerId = useRef<NodeJS.Timeout>();
    const images = [Image.slide1, Image.slide1, Image.slide1];

    const nextSlide = () => {
        (() => {
            clearInterval(timerId.current);
        })();
        setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % 3;
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
                nextIndex = prevIndex = 2;
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
                const nextIndex = (prevIndex + 1) % 3;
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
    }, []);

    return (
        <>
            <div className={`flex justify-center my-5 mt-12 mx-auto max-w-[978.4px] overflow-hidden relative`}>
                <div
                    ref={slideElement}
                    className='whitespace-nowrap transition-transform will-change-transform relative duration-1000'
                >
                    {images.map((item, i) => {
                        return <SlideItem image={item} key={i} />;
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
