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
                        className='w-[42px] h-[25px] bg-blackA9 
                                    rounded-full relative shadow-[0_2px_10px] 
                                    shadow-blackA7 
                                    focus:shadow-black 
                                    data-[state=checked]:bg-[#ff9592] 
                                    outline-none cursor-default'
                        defaultChecked
                        onCheckedChange={toggle}
                    >
                        <Switch.Thumb
                            className='block w-[21px] 
                                    h-[21px] bg-white rounded-full 
                                    shadow-[0_2px_2px] shadow-blackA7 
                                    transition-transform duration-100 
                                    translate-x-0.5 will-change-transform 
                                    data-[state=checked]:translate-x-[19px]'
                        />
                    </Switch.Root>
                </>
            ) : (
                <>
                    <Switch.Root
                        className='w-[42px] h-[25px] bg-blackA9 
                                    rounded-full relative shadow-[0_2px_10px] 
                                    shadow-[#ff9592]  
                                    focus:shadow-[#ff9592]  
                                    data-[state=checked]:bg-[#ff9592] 
                                    outline-none cursor-default'
                        onCheckedChange={toggle}
                    >
                        <Switch.Thumb
                            className='block w-[21px] 
                                        h-[21px] bg-white rounded-full 
                                        shadow-[0_2px_2px] shadow-blackA7 
                                        transition-transform duration-100 
                                        translate-x-0.5 
                                        data-[state=checked]:translate-x-[19px]'
                        />
                    </Switch.Root>
                </>
            )}
        </>
    );
};

export default PinkSwitch;
