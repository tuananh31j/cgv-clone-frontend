import Button from '~/components/Button';

const TimeItem = ({ ...passProps }) => {
    return (
        <>
            <Button
                {...passProps}
                customChildren
                className='border border-black p-1 me-1 data-[state=active]:bg-black data-[state=active]:text-white m-auto px-10'
            >
                07:30
            </Button>
        </>
    );
};

export default TimeItem;
