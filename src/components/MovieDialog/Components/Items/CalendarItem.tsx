import { DAY_OF_EN_SHORT } from '~/constants';
import ButtonState from '../ButtonState';

type ICalendarItemProps = {
    dataItem: Date | string;
    status: boolean;
    onClick: () => void;
};
const CalendarItem: React.FC<ICalendarItemProps> = ({ dataItem, status, onClick }) => {
    const date = new Date(dataItem);

    return (
        <>
            <ButtonState
                status={status}
                onClick={onClick}
                className='data[status=active]:focus:text-red-800 box-border flex h-[80vh] max-h-16 w-[80vw]  max-w-full items-start gap-2 rounded-md border-2   border-transparent  p-2  text-[#717171] hover:border-black data-[status=active]:border-red-800 data-[status=active]:bg-red-950 data-[status=active]:text-white'
            >
                <div className=' text-xs'>
                    <p>{date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}</p>
                    <p>{DAY_OF_EN_SHORT[date.getDay()]}</p>
                </div>
                <div>
                    <span className='text-3xl font-semibold '>
                        {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}
                    </span>
                </div>
            </ButtonState>
        </>
    );
};
export default CalendarItem;
