import Button from '~/components/Button';

const TimeItem = ({ dataItem, ...passProps }: { dataItem: number[] }) => {
    return (
        <>
            <Button
                {...passProps}
                customChildren
                className='border border-[#717171] text-[#717171] p-1 me-1 data-[state=active]:bg-red-950
                data-[state=active]:border-red-800 data-[state=active]:text-white m-auto px-10'
            >
                07:30
            </Button>
        </>
    );
};

export default TimeItem;
