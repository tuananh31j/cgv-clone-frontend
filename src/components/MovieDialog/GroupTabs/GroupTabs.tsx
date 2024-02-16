import * as Tabs from '@radix-ui/react-tabs';
import ContainerBox from '../ContainerBox';
import { CalendarItem, RegionItem } from '../Items';
import BookingTime from './BookingTime';
import SeatSelection from './SeatSelection';
import SnacksAndDrinks from './SnacksAndDrinks';
import Payment from './Payment';

const GroupTabs = () => (
    <Tabs.Root className='flex flex-col w-full h-[90vh] overflow-y-auto transition-all' defaultValue='tab1'>
        <Tabs.List
            className='shrink-0 flex border-b border-mauve6 sticky top-0 pb-2 bg-white'
            aria-label='Manage your account'
        >
            <Tabs.Trigger
                className='bg-white text-center h-[45px] px-5 flex-1 items-center text-[15px] font-semibold data-[state=active]:border-b-2 data-[state=active]:border-red-700 uppercase'
                value='tab1'
            >
                Đặt lịch
            </Tabs.Trigger>
            <Tabs.Trigger
                className='bg-white text-center h-[45px] px-5 flex-1 items-center text-[15px] font-semibold data-[state=active]:border-b-2 data-[state=active]:border-red-700 uppercase'
                value='tab2'
            >
                Chọn ghế
            </Tabs.Trigger>
            <Tabs.Trigger
                className='bg-white text-center h-[45px] px-5 flex-1 items-center text-[15px] font-semibold data-[state=active]:border-b-2 data-[state=active]:border-red-700 uppercase'
                value='tab3'
            >
                Ăn vặt
            </Tabs.Trigger>
            <Tabs.Trigger
                className='bg-white text-center h-[45px] px-5 flex-1 items-center text-[15px] font-semibold data-[state=active]:border-b-2 data-[state=active]:border-red-700 uppercase'
                value='tab4'
            >
                Thanh toán
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
            className='grow  bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black'
            value='tab1'
        >
            <BookingTime />
        </Tabs.Content>
        <Tabs.Content
            className='grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black'
            value='tab2'
        >
            <SeatSelection />
        </Tabs.Content>
        <Tabs.Content
            className='grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black'
            value='tab3'
        >
            <SnacksAndDrinks />
        </Tabs.Content>
        <Tabs.Content
            className='grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black'
            value='tab4'
        >
            <Payment />
        </Tabs.Content>
    </Tabs.Root>
);

export default GroupTabs;
