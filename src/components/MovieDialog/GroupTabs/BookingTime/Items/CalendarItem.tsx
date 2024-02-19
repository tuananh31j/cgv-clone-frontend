import Button from '~/components/Button';
import { DAY_OF_EN_SHORT } from '~/constants';

const CalendarItem = ({ dataItem, ...passProps }: { dataItem: Date }) => {
    return (
        <>
            <Button
                customChildren
                {...passProps}
                className='flex items-start max-h-16 h-[80vh] max-w-full w-[80vw]  gap-2 p-2 border-2 box-border hover:border-black   border-transparent  text-[#717171]  rounded-md data[state=active]:focus:text-red-800 data-[state=active]:border-red-800 data-[state=active]:bg-red-950 data-[state=active]:text-white'
            >
                <div className=' text-xs'>
                    <p>
                        {dataItem.getMonth() < 10 && '0'}
                        {dataItem.getMonth()}
                    </p>
                    <p>{DAY_OF_EN_SHORT[dataItem.getDay()]}</p>
                </div>
                <div>
                    <span className='text-3xl font-semibold '>
                        {dataItem.getDate() < 10 && '0'}
                        {dataItem.getDate()}
                    </span>
                </div>
            </Button>
        </>
    );
};
export default CalendarItem;
