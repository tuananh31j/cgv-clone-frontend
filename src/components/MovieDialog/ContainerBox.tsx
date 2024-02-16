import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useState } from 'react';
const ContainerBox = ({
    cols,
    Item,
    data,
    title,
}: {
    cols: string;
    Item: React.ElementType;
    data: number[];
    title?: string;
}) => {
    const [activated, setActivated] = useState<number>();

    return (
        <>
            <div className='border-b-2 pb-4 border-black my-4  w-full'>
                <div className='text-[#717171] text-xl my-2'>
                    <h1>{title}</h1>
                </div>
                <div className={`grid ${cols}  justify-start p-2 py-4`}>
                    {data.map((item, index) => (
                        <Item
                            index={index}
                            state={activated === index}
                            onClick={() => {
                                setActivated(index);
                                console.log(index);
                            }}
                            key={item}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ContainerBox;
