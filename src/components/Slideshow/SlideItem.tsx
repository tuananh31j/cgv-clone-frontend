const SlideItem = ({ image }: { image: string }) => {
    return (
        <div className='inline-block '>
            <a href=''>
                <img className='w-full' src={image} alt='' />
            </a>
        </div>
    );
};

export default SlideItem;
