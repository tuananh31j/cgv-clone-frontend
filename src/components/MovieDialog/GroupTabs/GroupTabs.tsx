import * as Tabs from '@radix-ui/react-tabs';
import ContainerBox from '../ContainerBox';
import { CalendarItem, RegionItem } from './BookingTime/Items';
import BookingTime from './BookingTime';
import SeatSelection from './SeatSelection';
import SnacksAndDrinks from './SnacksAndDrinks';
import Payment from './Payment';

const GroupTabs = () => (
    <Tabs.Root className='flex flex-col w-full h-[90vh] overflow-y-auto transition-all' defaultValue='tab1'>
        <Tabs.List
            className='shrink-0 uppercase flex font-bold text-[15px] sticky top-0 pb-2 bg-gray-950'
            aria-label='Manage your account'
        >
            <Tabs.Trigger
                className='bg-gray-950 uppercase h-[45px] px-5 flex-1 items-center data-[state=active]:border-b-2 data-[state=active]:border-red-700'
                value='tab1'
            >
                Đặt lịch
            </Tabs.Trigger>
            <Tabs.Trigger
                className='bg-gray-950 uppercase h-[45px] px-5 flex-1 items-center data-[state=active]:border-b-2 data-[state=active]:border-red-700'
                value='tab2'
            >
                Chọn ghế
            </Tabs.Trigger>
            <Tabs.Trigger
                className='bg-gray-950 uppercase h-[45px] px-5 flex-1 items-center data-[state=active]:border-b-2 data-[state=active]:border-red-700'
                value='tab3'
            >
                Ăn vặt
            </Tabs.Trigger>
            <Tabs.Trigger
                className='bg-gray-950 uppercase h-[45px] px-5 flex-1 items-center data-[state=active]:border-b-2 data-[state=active]:border-red-700'
                value='tab4'
            >
                Thanh toán
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className='my-4' value='tab1'>
            <BookingTime />
        </Tabs.Content>
        <Tabs.Content className='my-4' value='tab2'>
            <SeatSelection seatingMatrix={{ cols: 13, rows: 10 }} />
        </Tabs.Content>
        <Tabs.Content className='my-4' value='tab3'>
            <SnacksAndDrinks />
        </Tabs.Content>
        <Tabs.Content className='my-4' value='tab4'>
            <Payment />
        </Tabs.Content>
    </Tabs.Root>
);

export default GroupTabs;
