import { IRegion } from '~/types/Region';
import ButtonState from '../ButtonState';

type IRegionItemProps = {
    dataItem: IRegion;
    status: boolean | string;
    onClick: () => void;
};

const RegionItem: React.FC<IRegionItemProps> = ({ dataItem, status, onClick }) => {
    return (
        <>
            <ButtonState
                status={status}
                onClick={onClick}
                className='m-auto max-h-16 rounded-md border-2 border-transparent p-2 font-sans text-xs font-semibold capitalize text-[#717171] data-[status=active]:bg-red-950 data-[status=active]:text-white'
            >
                {dataItem.name}
            </ButtonState>
        </>
    );
};

export default RegionItem;
