import Button from '~/components/Button';
import ButtonState from '../ButtonState';
import { IFormat } from '~/types/Format';

const ScreenAndSubItem = ({
    dataItem,
    status,
    onClick,
}: {
    dataItem: IFormat | string;
    status: boolean;
    onClick: () => void;
}) => {
    return (
        <>
            <ButtonState
                status={status}
                onClick={onClick}
                className='m-auto me-1 box-border max-h-16 rounded-md border-2 border-[#717171] p-2 text-xs font-semibold capitalize  text-[#717171] data-[status=active]:bg-red-950 data-[status=active]:text-white'
            >
                <span>
                    <span className='uppercase'>2d</span> <span className=''>phụ đề việt</span>
                </span>
            </ButtonState>
        </>
    );
};

export default ScreenAndSubItem;
