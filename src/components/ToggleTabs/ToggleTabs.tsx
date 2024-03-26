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
    tabName: { tab1: { name: string; value?: string }; tab2: { name: string; value?: string } };
}) => {
    const [toggleTabs, setToggleTabs] = useState(false);
    return (
        <>
            <Tabs.Root defaultValue='tab1'>
                <Tabs.List className='mb-5 flex items-center justify-center text-white'>
                    <Tabs.Trigger
                        onClick={() => setToggleTabs(false)}
                        className={clsx(
                            'relative box-border flex items-center border-e-2  border-solid bg-[#e71a0f] px-2  py-[8px]  data-[state=active]:font-semibold'
                        )}
                        value='tab1'
                    >
                        <span className={clsx('flag__left')}></span>
                        <div className='flex'>
                            <div className='w-7'>{!toggleTabs && <FontAwesomeIcon icon={faHandPointRight} />}</div>
                            <span>{tabName.tab1.name}</span>
                        </div>
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        onClick={() => setToggleTabs(true)}
                        className={clsx(
                            'relative box-border flex items-center border-e-2 border-solid bg-[#e71a0f]  px-2 py-[8px]  data-[state=active]:font-semibold'
                        )}
                        value='tab2'
                    >
                        <span className='flag__right'></span>
                        <div className='flex'>
                            <div className='w-7'>{toggleTabs && <FontAwesomeIcon icon={faHandPointRight} />}</div>
                            <span>{tabName.tab2.name}</span>
                        </div>
                    </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value='tab1'>
                    <Content.Tab1 desc={tabName.tab1.value} />
                </Tabs.Content>
                <Tabs.Content value='tab2'>
                    <Content.Tab2 trailer_embed={tabName.tab2.value} />
                </Tabs.Content>
            </Tabs.Root>
        </>
    );
};

export default ToggleTabs;
