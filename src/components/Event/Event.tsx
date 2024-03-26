import Title from '../Title';
import Carousel from '../Carousel';
import EventItem from './EventItem';
import ToggleTabs from '../ToggleTabs';

const Event = () => {
    const data = [1, 2, 3, 4, 9, 80];

    const Tab1 = () => <Carousel Item={EventItem} data={data} />;

    const Tab2 = () => <Carousel Item={EventItem} data={data} />;

    return (
        <>
            <div className='mx-auto my-8 mt-12 max-w-[978.4px]'>
                <Title name='Event' img='bg_event' />
                <ToggleTabs
                    tabName={{ tab1: { name: 'Thành viên CGV' }, tab2: { name: 'Tin mới & Ưu đãi' } }}
                    Content={{ Tab1, Tab2 }}
                />
            </div>
        </>
    );
};

export default Event;
