import Button from '~/components/Button';

const CalendarItem = ({ ...passProps }) => {
    return (
        <>
            <Button
                customChildren
                {...passProps}
                className='flex items-start max-h-16 h-[80vh] max-w-full w-[80vw]  gap-2 p-2 border-2 box-border hover:border-black   border-transparent  text-[#717171]  rounded-md data[state=active]:focus:text-red-800 data-[state=active]:border-black data-[state=active]:bg-black data-[state=active]:text-white'
            >
                <div className=' text-xs'>
                    <p>02</p>
                    <p>Wed</p>
                </div>
                <div>
                    <span className='text-3xl font-semibold '>14</span>
                </div>
            </Button>
        </>
    );
};
export default CalendarItem;
