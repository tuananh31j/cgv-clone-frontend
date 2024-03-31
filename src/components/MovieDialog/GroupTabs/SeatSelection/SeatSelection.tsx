import Header from './Header';
import Footer from './Footer';
import Seat from './Seat';
import showMessage from '~/utilities/showMessage';
import { gennerateSeats } from '~/utilities/helper';
import Wrapper from '~/components/Wrapper';
type ISeatSelectionProps = {
    seatingMatrix: {
        cols: number;
        rows: number;
    };
    pickSeat: { index: number; name: string }[];
    soldSeatsList?: string[];
    handleClick: ({ index, name }: { index: number; name: string }) => void;
};

const SeatSelection: React.FC<ISeatSelectionProps> = ({ seatingMatrix, pickSeat, handleClick, soldSeatsList = [] }) => {
    const seatingMatrixStyle = seatingMatrix
        ? {
              display: 'grid',
              gridTemplateColumns: `repeat(${seatingMatrix?.cols}, minmax(0, 26px))`,
              gridTemplateRows: `repeat(${seatingMatrix?.rows}, minmax(0, 1fr))`,
          }
        : {};

    const { seats, normalSeats, vipSeats, doubleSeats } = gennerateSeats(seatingMatrix?.cols, seatingMatrix?.rows);
    const checkTypeSeat = (index: number): 'normal' | 'vip' | 'double' | 'reservedSeat' => {
        if (index < normalSeats) return 'normal';
        if (normalSeats <= index && index < vipSeats) return 'vip';
        if (vipSeats <= index && index < doubleSeats) return 'double';
        return 'reservedSeat';
    };

    return (
        <>
            <Wrapper title='Người/ghế'>
                <Header />
                <div style={seatingMatrixStyle} className='justify-center gap-[4px]'>
                    {seats.map((item, index) => {
                        return (
                            <Seat
                                onClick={
                                    soldSeatsList.includes(item)
                                        ? () => showMessage('Ghế đã được đặt!', 'info')
                                        : () => handleClick({ index, name: item })
                                }
                                type={soldSeatsList.includes(item) ? 'reservedSeat' : checkTypeSeat(index)}
                                status={pickSeat.map((item) => item.index).includes(index)}
                                key={item}
                            >
                                {item}
                            </Seat>
                        );
                    })}
                </div>
                <Footer />
            </Wrapper>
        </>
    );
};
export default SeatSelection;
