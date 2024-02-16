import Title from '../Title';
import Carousel from '../Carousel';
import EventItem from './EventItem';

import clsx from 'clsx';
import styles from './Event.module.scss';
import Image from '~/assets';
import ToggleTabs from '../ToggleTabs';

const Event = () => {
    const data = [1, 2, 3, 4, 9];

    const tab1 = (
        <Carousel dataLength={data.length}>
            {data.map((item) => (
                <EventItem image={Image.eventItem1} key={item} />
            ))}
        </Carousel>
    );

    const tab2 = (
        <Carousel dataLength={data.length}>
            {data.map((item) => (
                <EventItem image={Image.itemCard1} key={item} />
            ))}
        </Carousel>
    );

    return (
        <>
            <div className='max-w-[978.4px] mx-auto my-8 mt-12'>
                <Title name='Event' img='bg_event' />
                <ToggleTabs tabName={{ tab1: 'Thành viên CGV', tab2: 'Tin mới & Ưu đãi' }} content={{ tab1, tab2 }} />
            </div>
        </>
    );
};

export default Event;
