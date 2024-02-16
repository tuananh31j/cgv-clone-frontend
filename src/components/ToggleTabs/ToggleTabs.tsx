import * as Tabs from '@radix-ui/react-tabs';
import Button from '../Button';
import { useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
const ToggleTabs = ({
    Content,
    tabName,
}: {
    Content: { Tab1: React.ElementType; Tab2: React.ElementType };
    tabName: { tab1: string; tab2: string };
}) => {
    const [toggleTabs, setToggleTabs] = useState(false);
    return (
        <>
            <Tabs.Root defaultValue='tab1'>
                <Tabs.List className='flex justify-center items-center text-white mb-5'>
                    <Tabs.Trigger
                        onClick={() => setToggleTabs(false)}
                        className={clsx(
                            'bg-[#e71a0f] py-[8px] data-[state=active]:font-semibold flex items-center  border-e-2 border-solid  box-border  relative'
                        )}
                        value='tab1'
                    >
                        <Button iconLeft={<span className={clsx('flag__left')}></span>} className='px-2 pe-[20px]'>
                            <div className='flex'>
                                <div className='w-7'>{!toggleTabs && <FontAwesomeIcon icon={faHandPointRight} />}</div>
                                <span>{tabName.tab1}</span>
                            </div>
                        </Button>
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        onClick={() => setToggleTabs(true)}
                        className={clsx(
                            'bg-[#e71a0f] py-[8px] data-[state=active]:font-semibold flex items-center box-border  border-e-2 border-solid  relative'
                        )}
                        value='tab2'
                    >
                        <Button className='px-2 pe-[20px]' iconRight={<span className='flag__right'></span>}>
                            <div className='flex'>
                                <div className='w-7'>{toggleTabs && <FontAwesomeIcon icon={faHandPointRight} />}</div>
                                <span>{tabName.tab2}</span>
                            </div>
                        </Button>
                    </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value='tab1'>
                    <Content.Tab1 />
                </Tabs.Content>
                <Tabs.Content value='tab2'>
                    <Content.Tab2 />
                </Tabs.Content>
            </Tabs.Root>
        </>
    );
};

export default ToggleTabs;
