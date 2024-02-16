import clsx from 'clsx';
import styles from './Event.module.scss';
import Image from '~/assets';

const EventItem = ({ image }: { image: string }) => {
    return (
        <>
            <div className={clsx(styles.card, 'relative will-change-auto w-[240.3px] transition-all')}>
                <img className={clsx(styles.card_image)} src={image} alt='' />
            </div>
        </>
    );
};

export default EventItem;
