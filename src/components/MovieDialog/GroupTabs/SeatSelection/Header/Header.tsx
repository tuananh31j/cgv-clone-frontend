import Image from '~/assets';

const Header = () => {
    return (
        <div className='mx-auto mb-20'>
            <img className='mx-auto w-[80vw]' src={Image.bgScreen} alt='' />
        </div>
    );
};

export default Header;
