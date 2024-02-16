import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Image from '~/assets';
import Button from '../Button';
import clsx from 'clsx';
import ImageMagnifier from '../ImageMagnifier';
import ContainerBox from './ContainerBox';
import { CalendarItem, RegionItem, ScreenAndSubItem, TimeItem } from './Items';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useRef } from 'react';
const MovieDialog = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger asChild>{children}</Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className='bg-opacity-85 bg-black data-[state=open]:animate-overlayShow fixed inset-0 z-40' />
                    <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] z-50 max-w-[1200px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[36px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-y-auto '>
                        <div className=''>
                            <ContainerBox
                                cols={'grid-cols-13'}
                                data={[1, 3, 4, 5, 6, 7, 8, 91, 0, 454, 445, 5, 6, 44, 2, 3, 45]}
                                Item={CalendarItem}
                            />

                            <ContainerBox
                                cols={'grid-cols-auto'}
                                data={[
                                    1, 3, 4, 5, 6, 7, 8, 91, 0, 454, 445, 57, 67, 49, 20, 31, 46, 47, 51, 62, 73, 64,
                                    75, 61, 71, 60, 11, 22, 2222, 422, 4222, 423, 4234,
                                ]}
                                Item={RegionItem}
                            />
                            <ContainerBox cols='grid-cols-auto' data={[1, 3, 4]} Item={ScreenAndSubItem} />

                            <ContainerBox
                                cols='grid-cols-auto'
                                data={[1, 3, 4]}
                                title='CGV Hùng Vương Plaza'
                                Item={TimeItem}
                            />
                            <ContainerBox
                                cols='grid-cols-auto'
                                data={[1, 3, 4]}
                                title='CGV Hùng Vương Plaza'
                                Item={TimeItem}
                            />

                            <ContainerBox
                                cols='grid-cols-auto'
                                data={[1, 3, 4]}
                                title='CGV Hùng Vương Plaza'
                                Item={TimeItem}
                            />
                            <ContainerBox
                                cols='grid-cols-auto'
                                data={[1, 3, 4]}
                                title='CGV Hùng Vương Plaza'
                                Item={TimeItem}
                            />
                            <ContainerBox
                                cols='grid-cols-auto'
                                data={[1, 3, 4]}
                                title='CGV Hùng Vương Plaza'
                                Item={TimeItem}
                            />
                            <ContainerBox
                                cols='grid-cols-auto'
                                data={[1, 3, 4]}
                                title='CGV Hùng Vương Plaza'
                                Item={TimeItem}
                            />
                            <ContainerBox
                                cols='grid-cols-auto'
                                data={[1, 3, 4]}
                                title='CGV Hùng Vương Plaza'
                                Item={TimeItem}
                            />
                            <ContainerBox
                                cols='grid-cols-auto'
                                data={[1, 3, 4]}
                                title='CGV Hùng Vương Plaza'
                                Item={TimeItem}
                            />
                        </div>
                        <Dialog.Close asChild>
                            <button
                                className='text-violet11 absolute top-[10px] right-[10px] hover:bg-slate-500 hover:text-white inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full '
                                aria-label='Close'
                            >
                                <Cross2Icon />
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
};

export default MovieDialog;
