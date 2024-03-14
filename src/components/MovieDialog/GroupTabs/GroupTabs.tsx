import * as Tabs from '@radix-ui/react-tabs';
import { CalendarItem, RegionItem } from '../Components/Items';
import BookingTime from './BookingTime';
import SeatSelection from './SeatSelection';
import SnacksAndDrinks from './SnacksAndDrinks';
import Payment from './Payment';
import { IShowtime } from '~/types/Showtime';
import { getListOfNext30Day } from '~/utilities/helper';
import { useEffect, useState } from 'react';
import regionApi from '~/api/regionApi';
import { IRegion } from '~/types/Region';
import useFetch from '~/hooks/useFetch';
import { IFormat } from '~/types/Format';
import formatApi from '~/api/formatApi';
import showtimeApi from '~/api/showtimeApi';
import showMessage from '~/utilities/showMessage';

const InitCalendar = {
    index: 0,
    date: new Date(),
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

const GroupTabs = ({ movies }: { movies: IShowtime[] }) => {
    // const [regions, setRegions] = useState<IRegion[]>([]);
    const [formats, setFormats] = useState<IFormat[]>([]);
    const [selectCalendar, setSelectCalendar] = useState<ISelectCalendar>(InitCalendar);
    const [selectShowtime, setSelectShowtime] = useState<ISelectShowtime>(InitShowtime);
    const [selectRegion, setSelectRegion] = useState<ISelectRegion>(InitRegion);
    const [selectFormat, setSelectFormat] = useState<ISelectFormat>(InitFormat);
    const [currentMovieTime, setCurrentMovieTime] = useState<IShowtime[][]>([]);
    // const [showtimeTarget, setShowtimeTarget] = useState<IShowtime>();
    const [pickSeat, setPickSeat] = useState<{ index: number; name: string }[]>([]);
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
    };

    const { data: showtimeTarget } = useFetch<IShowtime>(async () => {
        const { data } = await showtimeApi.getOne(selectShowtime.showtime);
        return data;
    }, [selectShowtime]);

    const { data: regions } = useFetch<IRegion[]>(async () => {
        const { data } = await regionApi.getAll();
        const listRegionCurrent = movies.map((item) => {
            if (item.date === selectCalendar.date) {
                return item.theater.region;
            }
        });
        const regionList = data.filter((item, i) => listRegionCurrent.includes(item._id));
        return regionList;
    }, [movies, selectCalendar]);

    // useEffect(() => {
    //     (async () => {
    //         const { data } = await regionApi.getAll();
    //         const listRegionCurrent = movies.map((item) => {
    //             if (item.date === selectCalendar.date) {
    //                 return item.theater.region;
    //             }
    //         });
    //         const regionList = data.filter((item, i) => listRegionCurrent.includes(item._id));
    //         setRegions(regionList);
    //     })();
    // }, [movies, selectCalendar]);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const { data } = await showtimeApi.getOne(selectShowtime.showtime);
    //             setShowtimeTarget(data);
    //             console.log(data, 'ok');
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     })();
    // }, [selectShowtime]);
    useEffect(() => {
        console.log(selectShowtime);

        if (selectCalendar.date && selectRegion.region !== '' && selectFormat.format !== '') {
            const arr = movies
                .filter(
                    (item) =>
                        item.theater.region === selectRegion.region &&
                        item.theater.format === selectFormat.format &&
                        item.date === selectCalendar.date
                )
                .map((item, i, arr) => {
                    return arr.filter((movie) => {
                        if (i >= 1) {
                            return movie.cinema._id === item.cinema._id && arr[i]._id !== item._id;
                        }
                        return movie.cinema._id === item.cinema._id;
                    });
                });

            setCurrentMovieTime(arr);
        }
    }, [selectCalendar, selectFormat, selectRegion, movies, selectShowtime]);

    useEffect(() => {
        (async () => {
            const { data } = await formatApi.getAll();
            const listFormatCurrent = movies.map((item) => {
                if (item.date === selectCalendar.date && item.theater.region === selectRegion.region) {
                    return item.theater.format;
                }
            });
            const formatList = data.filter((item, i) => listFormatCurrent.includes(item._id));
            setFormats(formatList);
        })();
    }, [movies, selectCalendar, selectRegion]);

    useEffect(() => {
        if (!!regions && regions.length >= 1) {
            setSelectRegion({ index: 0, region: regions[0]._id });
        }
    }, [regions]);
    useEffect(() => {
        if (formats.length >= 1) {
            setSelectFormat({ index: 0, format: formats[0]._id });
        }
    }, [formats]);

    return (
        <Tabs.Root className='flex h-[90vh] w-full flex-col overflow-y-scroll transition-all' defaultValue='tab1'>
            <Tabs.List
                className='sticky top-0 flex shrink-0 bg-gray-950 pb-2 text-[15px] font-bold uppercase'
                aria-label='Manage your account'
            >
                <Tabs.Trigger
                    className='h-[45px] flex-1 items-center bg-gray-950 px-5 uppercase data-[state=active]:border-b-2 data-[state=active]:border-red-700'
                    value='tab1'
                >
                    Đặt lịch
                </Tabs.Trigger>
                <Tabs.Trigger
                    className={`h-[45px] flex-1 items-center bg-gray-950 px-5 uppercase data-[state=active]:border-b-2 data-[state=active]:border-red-700 ${!(selectShowtime.showtime !== '') ? 'opacity-10' : ''}`}
                    value='tab2'
                    disabled={!(selectShowtime.showtime !== '')}
                >
                    Chọn ghế
                </Tabs.Trigger>
                <Tabs.Trigger
                    className='h-[45px] flex-1 items-center bg-gray-950 px-5 uppercase data-[state=active]:border-b-2 data-[state=active]:border-red-700'
                    value='tab3'
                >
                    Ăn vặt
                </Tabs.Trigger>
                <Tabs.Trigger
                    className='h-[45px] flex-1 items-center bg-gray-950 px-5 uppercase data-[state=active]:border-b-2 data-[state=active]:border-red-700'
                    value='tab4'
                >
                    Thanh toán
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className='my-4' value='tab1'>
                <BookingTime
                    regionTarget={selectRegion}
                    calendarTarget={selectCalendar}
                    formatTarget={selectFormat}
                    regions={regions ? regions : []}
                    formats={formats}
                    movies={currentMovieTime}
                    ShowtimeTarget={selectShowtime}
                    handleClickSelectCalendar={handleClickSelectCalendar}
                    handleClickSelectRegion={handleClickSelectRegion}
                    handleClickSelectFormat={handleClickSelectFormat}
                    handleClickSelectShowtime={handleClickSelectShowtime}
                />
            </Tabs.Content>
            <Tabs.Content className='my-4' value='tab2'>
                {selectShowtime.showtime !== '' && !Array.isArray(showtimeTarget) && showtimeTarget && (
                    <SeatSelection
                        handleClick={handleClickSeat}
                        pickSeat={pickSeat}
                        seatingMatrix={{ cols: showtimeTarget.theater.colums, rows: showtimeTarget.theater.rows }}
                    />
                )}
            </Tabs.Content>
            <Tabs.Content className='my-4' value='tab3'>
                <SnacksAndDrinks />
            </Tabs.Content>
            <Tabs.Content className='my-4' value='tab4'>
                <Payment />
            </Tabs.Content>
        </Tabs.Root>
    );
};

export default GroupTabs;
