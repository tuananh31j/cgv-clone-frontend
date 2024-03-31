import BookingProgress from '../../BookingProgress';
import { IConcession } from '~/types/Concession';
import { IShowtime } from '~/types/Showtime';
import Wrapper from '~/components/Wrapper';
import { SnackItem } from '~/components/Items';

type ISnackAndDrinksProps = {
    concessions: IConcession[];
    propsBookingProgress: {
        showtimeTarget: IShowtime;
        concessions: { quanlity: number; concession: IConcession }[];
        seats: { index: number; name: string }[];
    };
    handleConcession: ({ quanlity, concession }: { quanlity: number; concession: IConcession }) => void;
    onclickToNextTab: () => void;
};
const SnacksAndDrinks: React.FC<ISnackAndDrinksProps> = ({
    propsBookingProgress,
    concessions,
    handleConcession,
    onclickToNextTab,
}) => {
    return (
        <>
            <Wrapper title='Bắp & nước'>
                <BookingProgress ticketInfor={propsBookingProgress} onClick={onclickToNextTab} />
                {concessions && (
                    <div className='grid grid-cols-2 justify-center gap-[4px] text-center'>
                        {concessions.map((item, i) => (
                            <SnackItem
                                selectedConcessions={propsBookingProgress.concessions}
                                concession={item}
                                key={i}
                                handleConcession={handleConcession}
                            />
                        ))}
                    </div>
                )}
            </Wrapper>
        </>
    );
};

export default SnacksAndDrinks;
