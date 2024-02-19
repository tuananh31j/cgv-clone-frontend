import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Image from '~/assets';
import Button from '../Button';
import clsx from 'clsx';
import ImageMagnifier from '../ImageMagnifier';
import ContainerBox from './ContainerBox';
import { CalendarItem, RegionItem, ScreenAndSubItem, TimeItem } from './GroupTabs/BookingTime/Items';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useRef } from 'react';
import GroupTabs from './GroupTabs/GroupTabs';
const MovieDialog = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger asChild>{children}</Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className='bg-opacity-85 bg-black data-[state=open]:animate-overlayShow fixed inset-0 z-40' />
                    <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] z-50  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-gray-950 text-white p-5 px-10 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none '>
                        <div>
                            <GroupTabs />
                            <Dialog.Close asChild>
                                <button
                                    className='text-violet11 absolute top-[10px] right-[10px] hover:bg-slate-500 hover:text-white inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full '
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
