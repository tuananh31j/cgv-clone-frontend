import Button from '~/components/Button';

interface ISeatProps {
    children?: string;
    type?: 'normal' | 'vip' | 'double' | 'reservedSeat';
}

const Seat: React.FC<ISeatProps> = ({ children, type, ...passProps }) => {
    const props: { type?: 'normal' | 'vip' | 'double' | 'reservedSeat' } = {};
    if (type) {
        props.type = type;
    }
    return (
        <>
            <Button
                {...passProps}
                {...props}
                customChildren
                className='border-2 border-black w-[26px] text-xs flex flex-col justify-center items-center h-[26px] data-[state=active]:bg-red-700 data-[state=active]:border-red-600 data-[state=active]:text-white data-[state=active]:font-semibold data-[type=normal]:border-green-600 data-[type=vip]:border-red-800 data-[type=double]:border-pink-500 data-[type=reservedSeat]:bg-slate-200 data-[type=reservedSeat]:border-opacity-10 data-[type=reservedSeat]:bg-opacity-10 data-[type=reservedSeat]:text-opacity-40 data-[type=reservedSeat]:text-white'
            >
                {children}
            </Button>
        </>
    );
};

export default Seat;
