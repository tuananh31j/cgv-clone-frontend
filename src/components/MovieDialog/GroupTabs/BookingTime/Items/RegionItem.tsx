import Button from '~/components/Button';

const RegionItem = ({ dataItem, ...passProps }: { dataItem: number[] }) => {
    return (
        <>
            <Button
                customChildren
                {...passProps}
                className='capitalize font-sans text-[#717171] m-auto p-2 border-2 border-transparent rounded-md text-xs max-h-16 data-[state=active]:bg-red-950 data-[state=active]:text-white font-semibold'
            >
                hồ chí minh
            </Button>
        </>
    );
};

export default RegionItem;
