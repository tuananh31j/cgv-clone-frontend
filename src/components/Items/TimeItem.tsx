import ButtonState from '../ButtonState';
import { format, parseISO } from 'date-fns';

type ITimeItemProps = {
    dataItem: string;
    status: boolean | string;
    onClick: () => void;
};
const TimeItem: React.FC<ITimeItemProps> = ({ dataItem, status, onClick }) => {
    const date = parseISO(dataItem);
    const formatTime = format(date, 'HH:mm');
    return (
        <>
            <ButtonState
                status={status}
                onClick={onClick}
                className='m-auto me-1 border border-[#717171] p-1 px-10
                text-[#717171] data-[status=active]:border-red-800 data-[status=active]:bg-red-950 data-[status=active]:text-white'
            >
                {formatTime}
            </ButtonState>
        </>
    );
};

export default TimeItem;
