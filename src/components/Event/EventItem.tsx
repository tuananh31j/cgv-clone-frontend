import clsx from 'clsx';
import styles from './Event.module.scss';
import Image from '~/assets';
import { forwardRef } from 'react';
interface IEventItemProps {
    item: { image: string };
}
const EventItem = forwardRef<HTMLImageElement, IEventItemProps>(({ item }, ref) => {
    return (
        <>
            <div className={clsx(styles.card, 'relative w-[240.3px] transition-all will-change-auto')}>
                <img ref={ref} className={clsx(styles.card_image)} src={item.image || Image.eventItem1} alt='' />
            </div>
        </>
    );
});

export default EventItem;
