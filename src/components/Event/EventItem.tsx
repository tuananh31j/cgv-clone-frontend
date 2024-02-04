import clsx from 'clsx';
import styles from './Event.module.scss';
import Image from '~/assets';

const EventItem = () => {
    return (
        <>
            <div className={clsx(styles.card, 'relative will-change-auto w-[240.3px] transition-all')}>
                <img className={clsx(styles.card_image)} src={Image.eventItem1} alt='' />
            </div>
        </>
    );
};

export default EventItem;
