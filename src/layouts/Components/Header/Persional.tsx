import clsx from 'clsx';
import styles from './Header.module.scss';
import PinkSwitch from '~/components/PinkSwitch/PinkSwitch';
import Button from '~/components/Button';
import Image from '~/assets';
import { useEffect, useState } from 'react';
import { ICustomer } from '~/types/Customer';
import auth from '~/api/authApi';
import { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

const Persional = ({ currentUser }: { currentUser?: ICustomer }) => {
    return (
        <div className={clsx(styles.header__persional)}>
            <nav>
                <ul className='flex justify-end gap-10 w-[930px] my-1 mx-auto uppercase text-sm  text-gray-500'>
                    <li>
                        <Link to={'/'} className='uppercase flex gap-1 items-center'>
                            <img src={Image.iconTagSale} /> Tin mới & Ưu đãi
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className='uppercase flex gap-1 items-center'>
                            <img src={Image.iconPersionalTicket} /> Vé của tôi
                        </Link>
                    </li>
                    <li>
                        {!currentUser && (
                            <span className='flex items-center'>
                                <Link to={'login'} className='uppercase flex gap-1 items-center'>
                                    <img src={Image.iconPersionalAccount} />
                                    Đăng nhập
                                </Link>
                                <span className='px-[1px]'>/</span>
                                <Link to={'register'} className='uppercase'>
                                    Đăng ký
                                </Link>
                            </span>
                        )}
                        {currentUser && <span>Xin chào! {currentUser.name}</span>}
                    </li>
                    <li>
                        <button className=' rounded-s-md bg-[#e71a0f] px-3 py-[2px] text-white'>VN</button>
                        <button className='rounded-e-md bg-gray-600 px-3 py-[2px] text-white'>EN</button>
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
