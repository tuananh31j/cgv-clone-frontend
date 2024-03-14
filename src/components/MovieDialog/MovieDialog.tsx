import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import GroupTabs from './GroupTabs/GroupTabs';
import { IShowtime } from '~/types/Showtime';
import showtimeApi from '~/api/showtimeApi';
import useFetch from '~/hooks/useFetch';
const MovieDialog = ({ movieID, children }: { children: React.ReactNode; movieID: string }) => {
    const [groupTabs, setGroupTabs] = useState({ bookingTime: { date: '' } });
    const getMovieShowtimeList = useCallback(async () => {
        // await new Promise((resolve) => {
        //     setTimeout(resolve, 3000);
        // });
        const { data: listShowtime } = await showtimeApi.getAll();
        return listShowtime.filter((item) => item.movie._id === movieID);
    }, [movieID]);

    const { data: movieShowtimeList, loading, error } = useFetch<IShowtime[]>(getMovieShowtimeList);

    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger asChild>{children}</Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className='data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-black bg-opacity-85' />
                    <Dialog.Content className='data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-50 w-[90vw]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-gray-950 p-5 px-10 text-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none '>
                        <div>
                            {loading && (
                                <div className='flex h-20 w-full flex-col items-center justify-center'>
                                    <div className='h-8 w-8 animate-spin rounded-full border-4 border-dotted border-white transition-all'></div>
                                </div>
                            )}
                            {!loading && movieShowtimeList && <GroupTabs movies={movieShowtimeList} />}

                            <Dialog.Close asChild>
                                <button
                                    className='text-violet11 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full hover:bg-slate-500 hover:text-white '
                                    aria-label='Close'
                                >
                                    <Cross2Icon />
                                </button>
                            </Dialog.Close>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
};

export default MovieDialog;
