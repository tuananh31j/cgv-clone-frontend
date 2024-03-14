import Image from '~/assets';
import Header from './Header';
import Footer from './Footer';
import Seat from './Seat';
import { ENGLISH_ALPHABET } from '~/constants';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import showMessage from '~/utilities/showMessage';
import Wrapper from '../../Components/Wrapper';
import { gennerateSeats } from '~/utilities/helper';
import { it } from 'node:test';
const SeatSelection = ({
    seatingMatrix,
    pickSeat,
    handleClick,
}: {
    seatingMatrix: {
        cols: number;
        rows: number;
    };
    pickSeat: { index: number; name: string }[];
    handleClick: ({ index, name }: { index: number; name: string }) => void;
}) => {
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
                                    item === 'D3'
                                        ? () => showMessage('Ghế đã được đặt!', 'warning')
                                        : () => handleClick({ index, name: item })
                                }
                                type={item === 'D3' ? 'reservedSeat' : checkTypeSeat(index)}
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
