import Button from '~/components/Button';

const ScreenAndSubItem = ({ ...passProps }) => {
    return (
        <>
            <Button
                customChildren
                {...passProps}
                className='capitalize font-sans text-[#717171] m-auto me-1 p-2 border-2 border-black rounded-md text-xs max-h-16  data-[state=active]:text-white data-[state=active]:bg-black box-border'
            >
                <span>
                    <span className='uppercase'>2d</span> <span className=''>phụ đề việt</span>
                </span>
            </Button>
        </>
    );
};

export default ScreenAndSubItem;
