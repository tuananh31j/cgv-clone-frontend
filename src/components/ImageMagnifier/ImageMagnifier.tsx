import clsx from 'clsx';
import { MouseEventHandler, useState } from 'react';

const ImageMagnifier = ({ image }: { image: string }) => {
    const [showMagnifier, setShowMagnifier] = useState<boolean>(false);
    const [backgroundPosition, setBackgroundPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x =
            ((e.pageX - left) / width) * 100 > 0
                ? ((e.pageX - left) / width) * 100 <= 100
                    ? ((e.pageX - left) / width) * 100
                    : 100
                : 0;
        const y =
            ((e.pageY - top) / height) * 100 > 0
                ? ((e.pageY - top) / height) * 100 <= 100
                    ? ((e.pageY - top) / height) * 100
                    : 100
                : 0;

        setBackgroundPosition({ x, y });
        setCursorPosition({
            x: e.pageX - left - 50 > 0 ? (e.pageX - left - 50 <= width - 100 ? e.pageX - left - 50 : width - 100) : 0,
            y: e.pageY - top - 50 > 0 ? (e.pageY - top - 50 <= 255 ? e.pageY - top - 50 : 255) : 0,
        });
    };
    return (
        <>
            <div
                className='relative '
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setShowMagnifier(true)}
                onMouseLeave={() => setShowMagnifier(false)}
            >
                <img className='w-[300px]' src={image} alt='' />
                <div
                    className={clsx(
                        { hidden: !showMagnifier },
                        `absolute h-[100px] w-[100px] border-2 border-white border-opacity-50 bg-white bg-opacity-40 `
                    )}
                    style={{
                        top: `${cursorPosition.y}px`,
                        left: `${cursorPosition.x}px`,
                    }}
                ></div>
            </div>
            <div
                className={clsx({ hidden: !showMagnifier }, 'absolute left-[30%] z-50 overflow-hidden text-center')}
                style={{
                    backgroundImage: `url(${image})`,
                    width: '400px',
                    height: '400px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
                    backgroundSize: '720px 1065px',
                }}
            ></div>
        </>
    );
};

export default ImageMagnifier;
