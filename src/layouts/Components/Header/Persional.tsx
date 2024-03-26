import clsx from 'clsx';
import styles from './Header.module.scss';
import PinkSwitch from '~/components/PinkSwitch/PinkSwitch';
import Image from '~/assets';
import { ICustomer } from '~/types/Customer';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { useAppDispatch } from '~/store/store';
import { Link } from 'react-router-dom';

const Persional = ({ currentUser, onClick }: { currentUser?: ICustomer; onClick: () => Promise<void> }) => {
    return (
        <div className={clsx(styles.header__persional)}>
            <nav>
                <ul className='mx-auto my-1 flex w-[930px] items-center justify-end gap-10 text-sm uppercase  text-gray-500'>
                    <li>
                        <Link to={'/'} className='flex items-center gap-1 uppercase'>
                            <img src={Image.iconTagSale} /> Tin mới & Ưu đãi
                        </Link>
                    </li>
                    <li>
                        <Link to={'account/my-ticket'} className='flex items-center gap-1 uppercase'>
                            <img src={Image.iconPersionalTicket} /> Vé của tôi
                        </Link>
                    </li>
                    <li>
                        {!currentUser && (
                            <span className='flex items-center'>
                                <Link to={'login'} className='flex items-center gap-1 uppercase'>
                                    <img src={Image.iconPersionalAccount} />
                                    Đăng nhập
                                </Link>
                                <span className='px-[1px]'>/</span>
                                <Link to={'register'} className='uppercase'>
                                    Đăng ký
                                </Link>
                            </span>
                        )}
                        {!!currentUser && (
                            <NavigationMenu.Root>
                                <NavigationMenu.List>
                                    <NavigationMenu.Item className='relative'>
                                        <NavigationMenu.Trigger className='cursor-pointe font-bold'>
                                            <span className='flex items-center font-semibold'>
                                                Xin chào 😊!
                                                <span className='text-md uppercase'>{currentUser.name}</span>
                                                <CaretDownIcon
                                                    className='relative top-[1px] text-red-600 transition-transform duration-[250] ease-in hover:rotate-180'
                                                    aria-hidden
                                                />
                                            </span>
                                        </NavigationMenu.Trigger>
                                        <NavigationMenu.Content className='absolute '>
                                            <div className={clsx('w-full  p-1')}>
                                                <ul className='box-content w-[100px] rounded-sm border-2  border-solid border-gray-500 bg-white p-2 text-black '>
                                                    {currentUser.role === 'admin' && (
                                                        <li className='font-bold hover:text-[#e71a0f]'>
                                                            <Link to='admin'>Admin</Link>
                                                        </li>
                                                    )}
                                                    <li className='text-[16px] font-bold hover:text-[#e71a0f]'>
                                                        <button onClick={onClick}>Logout</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </NavigationMenu.Content>
                                    </NavigationMenu.Item>
                                </NavigationMenu.List>
                            </NavigationMenu.Root>
                        )}
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
