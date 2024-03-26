import * as Tabs from '@radix-ui/react-tabs';
import BookingTime from './BookingTime';
import SeatSelection from './SeatSelection';
import SnacksAndDrinks from './SnacksAndDrinks';
import Payment from './Payment';
import { IShowtime } from '~/types/Showtime';
import { useCallback, useEffect, useState } from 'react';
import regionApi from '~/api/regionApi';
import { IRegion } from '~/types/Region';
import useAsync from '~/hooks/useAsync';
import { IFormat } from '~/types/Format';
import formatApi from '~/api/formatApi';
import showtimeApi from '~/api/showtimeApi';
import showMessage from '~/utilities/showMessage';
import Animation from '~/components/Animation';
import concessionApi from '~/api/concession';
import { IConcession } from '~/types/Concession';
import uniqid from 'uniqid';
import { useSelector } from 'react-redux';
import { RootState } from '~/store/store';
import orderApi from '~/api/orderApi';
import { format } from 'date-fns';

const InitCalendar = {
    index: '',
    date: '',
};
const InitShowtime = {
    index: '',
    showtime: '',
};
const InitRegion = {
    index: '',
    region: '',
};
const InitFormat = {
    index: '',
    format: '',
};
interface ISelectFormat {
    index: number | string;
    format: string;
}
interface ISelectRegion {
    index: number | string;
    region: string;
}
interface ISelectCalendar {
    index: number | string;
    date: string | Date;
}
interface ISelectShowtime {
    index: number | string;
    showtime: string;
}

const GroupTabs = ({ movieID, onHandleCloseDialog }: { movieID: string; onHandleCloseDialog: () => void }) => {
    const [tabControl, setTabControl] = useState<string>('tab1');

    //select
    const [selectCalendar, setSelectCalendar] = useState<ISelectCalendar>(InitCalendar);
    const [selectShowtime, setSelectShowtime] = useState<ISelectShowtime>(InitShowtime);
    const [selectRegion, setSelectRegion] = useState<ISelectRegion>(InitRegion);
    const [selectFormat, setSelectFormat] = useState<ISelectFormat>(InitFormat);
    const [currentMovieTime, setCurrentMovieTime] = useState<IShowtime[][]>([]);
    const [pickSeat, setPickSeat] = useState<{ index: number; name: string }[]>([]);
    const [selectConcessions, setSelectConcessions] = useState<{ quanlity: number; concession: IConcession }[]>([]);

    const getMovieShowtimeList = useCallback(async () => {
        // await new Promise((resolve) => {
        //     setTimeout(resolve, 3000);
        // });
        const { data } = await showtimeApi.getListMoviesShowtimeById(movieID);
        return data;
    }, [movieID]);
    let movies: IShowtime[] = [];

    movies = useAsync<IShowtime[] | []>(getMovieShowtimeList).value || [];

    //get
    const getShowtimeTarget = async () => {
        if (selectShowtime.showtime !== '') {
            const { data } = await showtimeApi.getOne(selectShowtime.showtime);
            return data;
        }
        return undefined;
    };
    const getFormatList = async () => {
        const { data } = await formatApi.getAll();
        const listFormatCurrent = movies.map((item) => {
            const dateOnly = format(item.date, 'yyyy-MM-dd');
            if (dateOnly === selectCalendar.date && item.theater.region._id === selectRegion.region) {
                return item.theater.format._id;
            }
        });
        const formatList = data.filter((item, i) => listFormatCurrent.includes(item._id));
        return formatList;
    };
    const getRegionList = async () => {
        const { data } = await regionApi.getAll();
        const listRegionCurrent = movies.map((item) => {
            const dateOnly = format(item.date, 'yyyy-MM-dd');
            if (dateOnly === selectCalendar.date) {
                return item.theater.region._id;
            }
        });
        const regionList = data.filter((item, i) => listRegionCurrent.includes(item._id));

        return regionList;
    };
    const getListConcession = async () => {
        const { data } = await concessionApi.getAll();
        return data;
    };

    const getSoldSeats = async (id: string) => {
        const { data } = await orderApi.getSoldSeatsList(id);
        return data;
    };

    //list
    const { value: showtimeTarget } = useAsync<IShowtime | undefined>(getShowtimeTarget, [selectShowtime]);
    const { value: regions } = useAsync<IRegion[]>(getRegionList, [movies, selectCalendar]);
    const { value: formats } = useAsync<IFormat[]>(getFormatList, [movies, selectCalendar, selectRegion]);
    const { value: concessionList } = useAsync<IConcession[]>(getListConcession);
    const meInfor = useSelector((state: RootState) => state.auth.login.currentUser);
    const { value: soldSeatsList } = useAsync<string[]>(async () => {
        if (showtimeTarget && showtimeTarget._id) {
            return getSoldSeats(showtimeTarget?._id);
        }
        return [];
    }, [showtimeTarget]);

    //handle
    const handleAddOrder = async () => {
        if (selectShowtime.showtime !== '' && pickSeat.length > 0 && meInfor && showtimeTarget) {
            const newOrder = {
                qr_code: uniqid(),
                user_name: meInfor.name,
                movie_name: showtimeTarget.movie.name,
                start_time: showtimeTarget.start_time,
                end_time: showtimeTarget.end_time,
                date: showtimeTarget.date,
                payment_type: true,
                region_name: showtimeTarget.theater.region.name,
                cinema_name: showtimeTarget.cinema.name,
                screening_format_name: showtimeTarget.theater.format.name,
                seat_quantity: pickSeat.length,
                seat_name: pickSeat.map((item) => item.name),
                current_seat_price: showtimeTarget.price,
                current_concession_price: selectConcessions.reduce(
                    (init, item) => init + item.quanlity * item.concession.price,
                    0
                ),
                concession_ref: selectConcessions.map((item) => item.concession._id),
                user_ref: meInfor.id,
                region_ref: showtimeTarget.theater.region._id,
                format_ref: showtimeTarget.theater.format._id,
                movie_ref: showtimeTarget.movie._id,
                cinema_ref: showtimeTarget.cinema._id,
                showtime_ref: showtimeTarget._id,
            };
            console.log(newOrder);

            try {
                await orderApi.add(newOrder);
                showMessage('Đặt vé thành công!', 'success');
                onHandleCloseDialog();
            } catch (error) {
                console.log(error);
            }
        }
    };
    const handleConcession = useCallback(({ quanlity, concession }: { quanlity: number; concession: IConcession }) => {
        if (quanlity >= 2) {
            setSelectConcessions((prev) => {
                return prev.map((item) => {
                    if (item.concession._id === concession._id) {
                        return { ...item, quanlity: quanlity };
                    }
                    return item;
                });
            });
        } else if (quanlity === 1) {
            setSelectConcessions((prev) => {
                return [...prev, { quanlity, concession }];
            });
        }
    }, []);
    const handleClickSeat = ({ index, name }: { index: number; name: string }) => {
        const seatIndex = pickSeat.map((item) => item.index);
        const minValue = Math.min(...seatIndex);
        const maxValue = Math.max(...seatIndex);
        if (
            seatIndex.length === 0 ||
            (!seatIndex.includes(index) && (index - minValue === -1 || index - maxValue === 1))
        ) {
            setPickSeat([...pickSeat, { index, name }]);
        } else if (seatIndex.includes(index)) {
            const newSeat = pickSeat.filter((item) => item.index !== index);
            setPickSeat(newSeat);
        } else {
            showMessage('Vui lòng chọn ghế gần nhau!', 'warning');
        }
    };
    const handleClickSelectCalendar = ({ index, date }: ISelectCalendar) => {
        setSelectCalendar({ index, date });
    };
    const handleClickSelectRegion = ({ index, region }: ISelectRegion) => {
        setSelectRegion({ index, region });
    };
    const handleClickSelectFormat = ({ index, format }: ISelectFormat) => {
        setSelectFormat({ index, format });
    };
    const handleClickSelectShowtime = ({ index, showtime }: ISelectShowtime) => {
        setSelectShowtime({ index, showtime });
        setTabControl('tab2');
    };
    const onClickToTabPay = () => {
        setTabControl('tab4');
    };

    //side effect
    useEffect(() => {
        if (selectCalendar.date && selectRegion.region !== '' && selectFormat.format !== '') {
            const arr = movies
                .filter(
                    (item) =>
                        item.theater.region._id === selectRegion.region &&
                        item.theater.format._id === selectFormat.format &&
                        format(item.date, 'yyyy-MM-dd') === selectCalendar.date
                )
                .map((item, i, arr) => {
                    return arr.filter((movie) => {
                        if (i >= 1) return movie.cinema._id === item.cinema._id && arr[i]._id !== item._id;
                        return movie.cinema._id === item.cinema._id;
                    });
                });

            setCurrentMovieTime(arr);
        }
    }, [selectCalendar, selectFormat, selectRegion, movieID, selectShowtime]);

    useEffect(() => {
        if (!!regions && regions.length >= 1) return setSelectRegion({ index: 0, region: regions[0]._id });
    }, [regions]);
    useEffect(() => {
        if (formats && formats.length >= 1) return setSelectFormat({ index: 0, format: formats[0]._id });
    }, [formats]);

    return (
        <Tabs.Root
            className='flex h-[90vh] w-full flex-col overflow-y-scroll transition-all'
            defaultValue='tab1'
            value={tabControl}
            onValueChange={setTabControl}
        >
            <Tabs.List
                className='sticky top-0 flex shrink-0 bg-gray-950 pb-2 text-[15px] font-bold uppercase'
                aria-label='Manage your account'
            >
                <Tabs.Trigger
                    className='h-[45px] flex-1 items-center border-b-[2px] border-transparent bg-gray-950 px-5 uppercase data-[state=active]:border-b-[2px] data-[state=active]:border-red-700'
                    value='tab1'
                >
                    Đặt lịch
                </Tabs.Trigger>
                <Tabs.Trigger
                    className={`h-[45px] flex-1 items-center border-b-[2px] border-transparent bg-gray-950 px-5 uppercase data-[state=active]:border-b-[2px] data-[state=active]:border-red-700 ${!(selectShowtime.showtime !== '') ? 'opacity-10' : ''}`}
                    value='tab2'
                    disabled={!(selectShowtime.showtime !== '')}
                >
                    Chọn ghế
                </Tabs.Trigger>
                <Tabs.Trigger
                    className={`h-[45px] flex-1 items-center border-b-[2px] border-transparent bg-gray-950 px-5 uppercase data-[state=active]:border-b-[2px] data-[state=active]:border-red-700 ${pickSeat.length <= 0 ? 'opacity-10' : ''}`}
                    value='tab3'
                    disabled={pickSeat.length <= 0}
                >
                    Ăn vặt
                </Tabs.Trigger>
                <Tabs.Trigger
                    className={`h-[45px] flex-1 items-center border-b-[2px] border-transparent bg-gray-950 px-5 uppercase data-[state=active]:border-b-[2px] data-[state=active]:border-red-700 ${pickSeat.length <= 0 ? 'opacity-10' : ''}`}
                    value='tab4'
                    disabled={pickSeat.length <= 0}
                >
                    Thanh toán
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className='my-4' value='tab1'>
                <Animation>
                    <BookingTime
                        regionTarget={selectRegion}
                        calendarTarget={selectCalendar}
                        formatTarget={selectFormat}
                        regions={regions ? regions : []}
                        formats={formats ? formats : []}
                        movies={currentMovieTime}
                        ShowtimeTarget={selectShowtime}
                        handleClickSelectCalendar={handleClickSelectCalendar}
                        handleClickSelectRegion={handleClickSelectRegion}
                        handleClickSelectFormat={handleClickSelectFormat}
                        handleClickSelectShowtime={handleClickSelectShowtime}
                    />
                </Animation>
            </Tabs.Content>
            <Tabs.Content className='my-4' value='tab2'>
                {showtimeTarget && (
                    <Animation>
                        <SeatSelection
                            soldSeatsList={soldSeatsList}
                            handleClick={handleClickSeat}
                            pickSeat={pickSeat}
                            seatingMatrix={{ cols: showtimeTarget.theater.colums, rows: showtimeTarget.theater.rows }}
                        />
                    </Animation>
                )}
            </Tabs.Content>
            <Tabs.Content className='my-4' value='tab3'>
                {pickSeat.length > 0 && showtimeTarget && concessionList && (
                    <Animation>
                        <SnacksAndDrinks
                            handleConcession={handleConcession}
                            onclickToNextTab={onClickToTabPay}
                            concessions={concessionList}
                            propsBookingProgress={{
                                showtimeTarget: showtimeTarget,
                                seats: pickSeat,
                                concessions: selectConcessions,
                            }}
                        />
                    </Animation>
                )}
            </Tabs.Content>
            <Tabs.Content className='my-4' value='tab4'>
                {pickSeat.length > 0 && showtimeTarget && concessionList && (
                    <Animation>
                        <Payment
                            ticketInfor={{
                                showtimeTarget: showtimeTarget,
                                seats: pickSeat,
                                concessions: selectConcessions,
                            }}
                            onRequest={handleAddOrder}
                        />
                    </Animation>
                )}
            </Tabs.Content>
        </Tabs.Root>
    );
};

export default GroupTabs;
