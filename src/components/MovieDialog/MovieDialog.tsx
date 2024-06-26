import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useState } from 'react';
import GroupTabs from './GroupTabs';
const MovieDialog = ({ movieID, children }: { children: React.ReactNode; movieID: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleCloseDialog = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                <Dialog.Trigger asChild>{children}</Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className='data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-black bg-opacity-85' />
                    <Dialog.Content className='data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-50 w-[90vw]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-gray-950 p-5 px-10 text-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none '>
                        <div>
                            <GroupTabs movieID={movieID} onHandleCloseDialog={handleCloseDialog} />

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
