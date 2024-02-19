import Button from '~/components/Button';

const ScreenAndSubItem = ({ dataItem, ...passProps }: { dataItem: number[] }) => {
    return (
        <>
            <Button
                customChildren
                {...passProps}
                className='capitalize font-semibold text-[#717171] m-auto me-1 p-2 border-2 border-[#717171] rounded-md text-xs max-h-16  data-[state=active]:text-white data-[state=active]:bg-red-950 box-border'
            >
                <span>
                    <span className='uppercase'>2d</span> <span className=''>phụ đề việt</span>
                </span>
            </Button>
        </>
    );
};

export default ScreenAndSubItem;
