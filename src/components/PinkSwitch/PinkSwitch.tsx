import * as Switch from '@radix-ui/react-switch';
import usePinkTheme from '~/hooks/usePinkTheme';
const PinkSwitch = () => {
    const [pinkTheme, setPinkTheme] = usePinkTheme();
    const toggle = () => {
        setPinkTheme(!pinkTheme);
    };
    return (
        <>
            {pinkTheme ? (
                <>
                    <Switch.Root
                        className='bg-blackA9 shadow-blackA7 relative 
                                    h-[25px] w-[42px] cursor-default 
                                    rounded-full 
                                    shadow-[0_2px_10px] 
                                    outline-none 
                                    focus:shadow-black data-[state=checked]:bg-[#ff9592]'
                        defaultChecked
                        onCheckedChange={toggle}
                    >
                        <Switch.Thumb
                            className='shadow-blackA7 block 
                                    h-[21px] w-[21px] translate-x-0.5 
                                    rounded-full bg-white 
                                    shadow-[0_2px_2px] transition-transform 
                                    duration-100 will-change-transform 
                                    data-[state=checked]:translate-x-[19px]'
                        />
                    </Switch.Root>
                </>
            ) : (
                <>
                    <Switch.Root
                        className='bg-blackA9 relative h-[25px] 
                                    w-[42px] cursor-default rounded-full 
                                    shadow-[0_2px_10px]  
                                    shadow-[#ff9592]  
                                    outline-none 
                                    focus:shadow-[#ff9592] data-[state=checked]:bg-[#ff9592]'
                        onCheckedChange={toggle}
                    >
                        <Switch.Thumb
                            className='shadow-blackA7 block 
                                        h-[21px] w-[21px] translate-x-0.5 
                                        rounded-full bg-white 
                                        shadow-[0_2px_2px] transition-transform 
                                        duration-100 
                                        data-[state=checked]:translate-x-[19px]'
                        />
                    </Switch.Root>
                </>
            )}
        </>
    );
};

export default PinkSwitch;
