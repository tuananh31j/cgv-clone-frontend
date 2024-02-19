import BookingProgress from '../../BookingProgress';
import ContainerBox from '../../ContainerBox';
import Item from './Item';

const SnacksAndDrinks = () => {
    const Header = () => {
        return <div>Header</div>;
    };
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const Content = () => {
        return (
            <div className='grid grid-cols-2 justify-center gap-[4px] text-center'>
                {data.map((item) => (
                    <Item key={item} />
                ))}
            </div>
        );
    };
    return (
        <>
            <ContainerBox Header={BookingProgress} title='Bắp & nước' Content={Content}></ContainerBox>
        </>
    );
};

export default SnacksAndDrinks;
