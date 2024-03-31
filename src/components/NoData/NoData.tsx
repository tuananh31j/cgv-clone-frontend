import Wrapper from '../Wrapper';

const NoData = ({ title }: { title: string }) => {
    return (
        <Wrapper>
            <p className='text-center font-extralight italic'>{title}!😊</p>
        </Wrapper>
    );
};
export default NoData;
