import { useState } from 'react';
import { IRegion } from '~/types/Region';

interface IContainerBoxProps {
    gridCols?: string;
    Item?: React.ElementType;
    data?: number[] | Date[] | IRegion[];
    title?: string;
    Header?: React.ElementType;
    Footer?: React.ElementType;
    className?: string;
    Content?: React.ElementType;
}
const ContainerBox: React.FC<IContainerBoxProps> = ({
    gridCols,
    Item,
    data,
    title,
    Header,
    Footer,
    className,
    Content,
}) => {
    const [activated, setActivated] = useState<number>();

    // const checkActive = (index: number) =>
    //     Array.isArray(itemIndexState) ? itemIndexState.includes(index) : itemIndexState === index;
    const gridClass = gridCols ? `grid ${gridCols} justify-start` : '';

    return (
        <>
            <div className={`my-4 w-full border-b-2 border-white border-opacity-15  pb-4 ${className}`}>
                <div className='my-2 text-xl text-[#717171]'>
                    <h1>{title}</h1>
                </div>
                {Header && <Header />}
                {!Content && Item && (
                    <div className={`${gridClass} ${className} p-2 py-4 `}>
                        {data?.map((item, index) => (
                            <Item
                                dataItem={item}
                                state={activated === index}
                                onClick={() => setActivated(index)}
                                key={item}
                            />
                        ))}
                    </div>
                )}
                {Content && <Content />}
                {Footer && <Footer />}
            </div>
        </>
    );
};

export default ContainerBox;
