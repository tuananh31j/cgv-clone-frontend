import ContainerBox from '../../ContainerBox';
import { CalendarItem, RegionItem, ScreenAndSubItem, TimeItem } from '../../Items';

const BookingTime = () => {
    return (
        <>
            <div className=''>
                <ContainerBox
                    cols={'grid-cols-13'}
                    data={[1, 3, 4, 5, 6, 7, 8, 91, 0, 454, 445, 5, 6, 44, 2, 3, 45]}
                    Item={CalendarItem}
                />

                <ContainerBox
                    cols={'grid-cols-auto'}
                    data={[
                        1, 3, 4, 5, 6, 7, 8, 91, 0, 454, 445, 57, 67, 49, 20, 31, 46, 47, 51, 62, 73, 64, 75, 61, 71,
                        60, 11, 22, 2222, 422, 4222, 423, 4234,
                    ]}
                    Item={RegionItem}
                />
                <ContainerBox cols='grid-cols-auto' data={[1, 3, 4]} Item={ScreenAndSubItem} />

                <ContainerBox cols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
                <ContainerBox cols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />

                <ContainerBox cols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
                <ContainerBox cols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
                <ContainerBox cols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
                <ContainerBox cols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
                <ContainerBox cols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
                <ContainerBox cols='grid-cols-auto' data={[1, 3, 4]} title='CGV Hùng Vương Plaza' Item={TimeItem} />
            </div>
        </>
    );
};

export default BookingTime;
