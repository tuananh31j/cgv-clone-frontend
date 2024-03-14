import { getListOfNext30Day } from '../../../../utilities/helper';
import { CalendarItem, RegionItem, ScreenAndSubItem, TimeItem } from '../../Components/Items';
import { IRegion } from '~/types/Region';
import Wrapper from '../../Components/Wrapper';
import { IFormat } from '~/types/Format';
import { IShowtime } from '~/types/Showtime';

const BookingTime = ({
    calendarTarget,
    regionTarget,
    formatTarget,
    ShowtimeTarget,
    regions,
    formats,
    movies,
    handleClickSelectCalendar,
    handleClickSelectRegion,
    handleClickSelectFormat,
    handleClickSelectShowtime,
}: {
    calendarTarget: { index: number | string; date: Date | string };
    regionTarget: { index: number | string; region: string };
    formatTarget: { index: number | string; format: string };
    ShowtimeTarget: { index: number | string; showtime: string };
    regions: IRegion[];
    formats: IFormat[];
    movies: IShowtime[][];
    handleClickSelectRegion: ({ index, region }: { index: number | string; region: string }) => void;
    handleClickSelectCalendar: ({ index, date }: { index: number | string; date: string | Date }) => void;
    handleClickSelectFormat: ({ index, format }: { index: number | string; format: string }) => void;
    handleClickSelectShowtime: ({ index, showtime }: { index: number | string; showtime: string }) => void;
}) => {
    const list30Day = getListOfNext30Day();
    return (
        <>
            <div className=''>
                <Wrapper>
                    <div className='grid grid-cols-13'>
                        {list30Day.map((item, i) => (
                            <CalendarItem
                                key={i}
                                status={calendarTarget?.index === i}
                                onClick={() => handleClickSelectCalendar({ index: i, date: item })}
                                dataItem={item}
                            />
                        ))}
                    </div>
                </Wrapper>

                {regions.length >= 1 && (
                    <>
                        <Wrapper>
                            <div className='grid grid-cols-auto justify-start'>
                                {regions.map((item, i) => (
                                    <RegionItem
                                        dataItem={item}
                                        key={i}
                                        status={regionTarget?.index === i}
                                        onClick={() => handleClickSelectRegion({ index: i, region: item._id })}
                                    />
                                ))}
                            </div>
                        </Wrapper>

                        <Wrapper>
                            <div className='grid grid-cols-auto justify-start'>
                                {formats.map((item, i) => (
                                    <ScreenAndSubItem
                                        dataItem={item}
                                        key={i}
                                        status={formatTarget?.index === i}
                                        onClick={() => handleClickSelectFormat({ index: i, format: item._id })}
                                    />
                                ))}
                            </div>
                        </Wrapper>
                        {movies.map((item, i) => {
                            if (item.length >= 1) {
                                return (
                                    <Wrapper key={i} title={item[0].cinema.name}>
                                        <div className='grid grid-cols-auto justify-start'>
                                            {item.map((item, i) => (
                                                <TimeItem
                                                    key={i}
                                                    dataItem={item.start_time}
                                                    status={ShowtimeTarget.index === i}
                                                    onClick={() =>
                                                        handleClickSelectShowtime({ index: i, showtime: item._id })
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </Wrapper>
                                );
                            }
                        })}
                    </>
                )}
                {!(regions.length >= 1) && (
                    <>
                        <Wrapper>
                            <p className='text-center font-extralight italic'>Hiện Chưa có lịch!😊</p>
                        </Wrapper>
                    </>
                )}
            </div>
        </>
    );
};

export default BookingTime;
