import Title from '../Title';
import Carousel from '../Carousel';
import EventItem from './EventItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';
import styles from './Event.module.scss';

const Event = () => {
    const data = [1, 2, 3, 4];
    return (
        <>
            <div className='max-w-[978.4px] mx-auto my-8 mt-12'>
                <Title name='Event' img='bg_event' />
                <div className='flex justify-center items-center text-white mb-5'>
                    <div
                        className={clsx(
                            'bg-[#e71a0f] p-2 px-6 flex items-center gap-1 border-e-2 border-solid  relative'
                        )}
                    >
                        <span className={clsx(styles.event__flag__left)}></span>
                        <FontAwesomeIcon icon={faHandPointRight} />
                        <p>Thành viên mới</p>
                    </div>
                    <div className={clsx('bg-[#e71a0f] p-2 px-5 pe-6  relative')}>
                        <p>Tin mới & Ưu đãi</p>
                        <span className={clsx(styles.event__flag__right)}></span>
                    </div>
                </div>
                <Carousel dataLength={data.length}>
                    {data.map((item) => (
                        <EventItem key={item} />
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default Event;
