import ContainerBox from '../../ContainerBox';
import { CalendarItem, RegionItem, ScreenAndSubItem, TimeItem } from './Items';

const BookingTime = () => {
    const TODAY = new Date();
    const LISTOFNEXT30DAY = [];
    for (let i = 0; i < 30; i++) {
        const nextDay = new Date(TODAY);
        nextDay.setDate(TODAY.getDate() + i);
        LISTOFNEXT30DAY.push(nextDay);
    }

    return (
        <>
            <div className=''>
                <ContainerBox gridCols={'grid-cols-13'} data={LISTOFNEXT30DAY} Item={CalendarItem} />

                <ContainerBox
                    gridCols={'grid-cols-auto'}
                    data={[
                        1, 3, 4, 5, 6, 7, 8, 91, 0, 454, 445, 57, 67, 49, 20, 31, 46, 47, 51, 62, 73, 64, 75, 61, 71,
                        60, 11, 22, 2222, 422, 4222, 423, 4234,
                    ]}
                    Item={RegionItem}
                />
                <ContainerBox gridCols='grid-cols-auto' data={[1, 3, 4]} Item={ScreenAndSubItem} />
                <ContainerBox gridCols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
                <ContainerBox gridCols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
                <ContainerBox gridCols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
                <ContainerBox gridCols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
                <ContainerBox gridCols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
                <ContainerBox gridCols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
                <ContainerBox gridCols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
                <ContainerBox gridCols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
            </div>
        </>
    );
};

export default BookingTime;
