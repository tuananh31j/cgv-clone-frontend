import Title from '../Title/Title';
import Carousel from '../Carousel';
import EventItem from './EventItem';

const Event = () => {
    const data = [1, 2, 3, 4];
    return (
        <>
            <div className='max-w-[978.4px] mx-auto my-8 mt-12'>
                <Title name='Event' img='bg_event' />
                <Carousel item='event' data={[1, 2, 3, 4]} />
            </div>
        </>
    );
};

export default Event;
