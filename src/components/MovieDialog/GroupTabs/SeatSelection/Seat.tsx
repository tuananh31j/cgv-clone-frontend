import ButtonState from '../../Components/ButtonState';

interface ISeatProps {
    children?: React.ReactNode;
    status?: boolean;
    onClick?: () => void;
    type?: 'normal' | 'vip' | 'double' | 'reservedSeat';
}

const Seat: React.FC<ISeatProps> = ({ children, type, status, onClick }) => {
    return (
        <>
            <ButtonState
                type={type}
                onClick={onClick}
                status={status}
                className='flex h-[26px] w-[26px] cursor-pointer flex-col items-center justify-center border-2 border-black text-xs data-[status=active]:border-red-600 data-[type=double]:border-pink-500 data-[type=normal]:border-green-600 data-[type=vip]:border-red-800 data-[type=reservedSeat]:border-opacity-10 data-[status=active]:bg-red-700 data-[type=reservedSeat]:bg-slate-200 data-[type=reservedSeat]:bg-opacity-10 data-[status=active]:font-semibold data-[status=active]:text-white data-[type=reservedSeat]:text-white data-[type=reservedSeat]:text-opacity-40'
            >
                {children}
            </ButtonState>
        </>
    );
};

export default Seat;
