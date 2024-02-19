import Image from '~/assets';
import ContainerBox from '../../ContainerBox';
import Header from './Header';
import Footer from './Footer';
import Seat from './Seat';
import { ENGLISH_ALPHABET } from '~/constants';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const SeatSelection = ({
    seatingMatrix,
}: {
    seatingMatrix?: {
        cols: number;
        rows: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
    };
}) => {
    const [pickSeat, setPickSeat] = useState<number[]>([]);
    const showWarningMessage = (message: string) => {
        toast.warning(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const handleClick = (index: number) => {
        console.log('ok');

        setPickSeat((prev) => {
            const minValue = Math.min(...prev);
            const maxValue = Math.max(...prev);

            if (prev.length === 0 || (!prev.includes(index) && (index - minValue === -1 || index - maxValue === 1))) {
                console.log('ok');

                return [...prev, index];
            } else if (prev.includes(index)) {
                console.log('ok2');

                return prev.filter((item) => item !== index);
            } else {
                showWarningMessage('Vui lòng chọn ghế gần nhau!');
                return prev;
            }
        });
    };
    const seatingMatrixStyle = seatingMatrix
        ? {
              display: 'grid',
              gridTemplateColumns: `repeat(${seatingMatrix?.cols}, minmax(0, 26px))`,
              gridTemplateRows: `repeat(${seatingMatrix?.rows}, minmax(0, 1fr))`,
          }
        : {};

    const Wrapper = () => {
        const seats: string[] = [];
        let seatName = '';
        let normalSeats = 0;
        let vipSeats = 0;
        let doubleSeats = 0;
        if (seatingMatrix) {
            for (let i = 1; i <= seatingMatrix.rows; i++) {
                for (let j = 1; j <= seatingMatrix.cols; j++) {
                    seatName = `${ENGLISH_ALPHABET[i - 1]}${j}`;
                    seats.push(seatName);
                    if (i === 3 && j === seatingMatrix.cols) {
                        normalSeats = j * i;
                        console.log(j, i);
                    }
                    if (i === seatingMatrix.rows - 1 && j === seatingMatrix.cols) {
                        vipSeats = j * i;
                        console.log(j, i);
                    }
                    if (i === seatingMatrix.rows && j === seatingMatrix.cols) {
                        doubleSeats = j * i;
                        console.log(j, i);
                    }
                }
            }
        }
        const checkTypeSeat = (index: number): 'normal' | 'vip' | 'double' | 'reservedSeat' => {
            if (index < normalSeats) return 'normal';
            if (normalSeats <= index && index < vipSeats) return 'vip';
            if (vipSeats <= index && index < doubleSeats) return 'double';
            return 'reservedSeat';
        };

        return (
            <div style={seatingMatrixStyle} className='justify-center gap-[4px]'>
                {seats.map((item, index) => {
                    const passProps: {
                        state: boolean;
                        type: 'normal' | 'vip' | 'double' | 'reservedSeat';
                        onClick: () => void;
                    } = {
                        state: pickSeat.includes(index),
                        type: item === 'D3' ? 'reservedSeat' : checkTypeSeat(index),
                        onClick:
                            item === 'D3' ? () => showWarningMessage('Ghế đã được đặt!') : () => handleClick(index),
                    };

                    return (
                        <Seat {...passProps} key={item}>
                            {item}
                        </Seat>
                    );
                })}
            </div>
        );
    };
    return (
        <>
            <ContainerBox
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 4, 5, 6, 11]}
                title='Người/ghế'
                Header={Header}
                Footer={Footer}
                Content={Wrapper}
            />
            <ToastContainer />
        </>
    );
};
export default SeatSelection;
