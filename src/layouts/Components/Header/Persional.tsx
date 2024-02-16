import clsx from 'clsx';
import styles from './Header.module.scss';
import PinkSwitch from '~/components/PinkSwitch/PinkSwitch';
import Button from '~/components/Button';
import Image from '~/assets';

const Persional = () => {
    return (
        <div className={clsx(styles.header__persional)}>
            <nav>
                <ul className='flex justify-end gap-10 w-[930px] my-1 mx-auto uppercase text-sm  text-gray-500'>
                    <li>
                        <Button to={'/'} iconLeft={<img src={Image.iconTagSale} />} className='uppercase'>
                            Tin mới & Ưu đãi
                        </Button>
                    </li>
                    <li>
                        <Button to={'/'} iconLeft={<img src={Image.iconPersionalTicket} />} className='uppercase'>
                            Vé của tôi
                        </Button>
                    </li>
                    <li>
                        <span className='flex items-center'>
                            <Button to={'/'} iconLeft={<img src={Image.iconPersionalAccount} />} className='uppercase'>
                                Đăng nhập
                            </Button>
                            <span className='px-[1px]'>/</span>
                            <Button to={'/'} className='uppercase'>
                                Đăng ký
                            </Button>
                        </span>
                    </li>
                    <li>
                        <Button className=' rounded-s-md bg-[#e71a0f] px-3 py-[2px] text-white'>VN</Button>
                        <Button className='rounded-e-md bg-gray-600 px-3 py-[2px] text-white'>EN</Button>
                    </li>
                    <li>
                        <PinkSwitch />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Persional;
