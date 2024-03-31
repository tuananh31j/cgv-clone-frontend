import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
const TrailerDialog = ({ children, trailerEmbed }: { children: React.ReactNode; trailerEmbed: string }) => {
    const ytbEmbed = trailerEmbed ? trailerEmbed : 'gAmW3kvgMok';
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>{children}</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-90' />
                <Dialog.Content className='fixed left-[50%] top-[50%] h-full max-h-[85vh] w-[90vw] max-w-[60vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-gray-900 bg-opacity-90 p-[34px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] '>
                    <iframe
                        className='h-full w-full'
                        width='560'
                        height='315'
                        src={`//www.youtube.com/embed/${ytbEmbed}`}
                        allowFullScreen
                    ></iframe>

                    <Dialog.Close asChild>
                        <button
                            className='text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] '
                            aria-label='Close'
                        >
                            <Cross2Icon className='h-10 w-10 text-white' />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
export default TrailerDialog;
