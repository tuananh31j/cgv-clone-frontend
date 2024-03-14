import { forwardRef } from 'react';

interface ISlideItemProps {
    image: string;
    test: number;
}

const SlideItem = forwardRef<HTMLImageElement, ISlideItemProps>(({ image, test }, ref) => {
    return (
        <div className='inline-block '>
            <a href=''>
                <img ref={ref} className='w-full' src={image} alt='' />
            </a>
        </div>
    );
});

export default SlideItem;
