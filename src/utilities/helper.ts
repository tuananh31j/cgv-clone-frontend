import { format } from 'date-fns';
import { ENGLISH_ALPHABET } from '~/constants';
const getListOfNext30Day = () => {
    const TODAY = new Date();
    const LISTOFNEXT30DAY = [];
    for (let i = 0; i < 30; i++) {
        const nextDay = new Date(TODAY);
        nextDay.setDate(TODAY.getDate() + i);
        LISTOFNEXT30DAY.push(format(nextDay, 'yyyy-MM-dd'));
    }
    return LISTOFNEXT30DAY;
};

const isDateIncluded = (date: string) => {
    const dateTocheck = new Date(date);
    return getListOfNext30Day().some((item) => {
        const nextDay = new Date(item);
        return (
            nextDay.getDate() === dateTocheck.getDate() &&
            nextDay.getFullYear() === dateTocheck.getFullYear() &&
            nextDay.getMonth() === dateTocheck.getMonth()
        );
    });
};

const gennerateSeats = (cols: number, rows: number) => {
    const seats: string[] = [];
    let seatName = '';
    let normalSeats = 0;
    let vipSeats = 0;
    let doubleSeats = 0;

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            seatName = `${ENGLISH_ALPHABET[i - 1]}${j}`;
            seats.push(seatName);
            if (i === 3 && j === cols) {
                normalSeats = j * i;
            }
            if (i === rows - 1 && j === cols) {
                vipSeats = j * i;
            }
            if (i === rows && j === cols) {
                doubleSeats = j * i;
            }
        }
    }
    return { seats, normalSeats, vipSeats, doubleSeats };
};

export { getListOfNext30Day, isDateIncluded, gennerateSeats };
