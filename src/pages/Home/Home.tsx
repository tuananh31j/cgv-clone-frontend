import clsx from 'clsx';
import style from './Home.module.scss';
import React from 'react';
import Slideshow from '~/components/Slideshow/Slideshow';
import MovieSelection from '~/components/MovieSelection/MovieSelection';
import Event from '~/components/Event/Event';

const HomePage = () => {
    const images = [
        'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
        'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    ];
    return (
        <>
            <div className='container mx-auto mt-8'>
                <div>
                    <div className='wibget border-b border-solid border-black '>
                        <ul
                            className={clsx(
                                style.wibget__nav,
                                ' border-b border-solid border-black pb-6 mb-[5px] flex gap-4 '
                            )}
                        >
                            <li>
                                <a className='theater' href='https://www.cgv.vn/default/cinox/site/'>
                                    cgv theater
                                </a>
                            </li>
                            <li>
                                <a className='now-sh' href='https://www.cgv.vn/default/movies/now-showing.html/'>
                                    now showing
                                </a>
                            </li>
                            <li>
                                <a className='special' href='https://www.cgv.vn/default/theaters/special/gold-class'>
                                    cgv special
                                </a>
                            </li>
                            <li>
                                <a className='event' href='https://www.cgv.vn/default/cinemas/sale/'>
                                    Mua voucher, thẻ quả tặng CGV
                                </a>
                            </li>
                            <li>
                                <a className='ticket required-login' href='https://www.cgv.vn/default/contacts/'>
                                    my ticket info
                                </a>
                            </li>
                            <li>
                                <a className='dc' href='https://www.cgv.vn/default/newsoffer/'>
                                    discount info
                                </a>
                            </li>
                            <li>
                                <a className='login-header' href='https://www.cgv.vn/default/customer/account/create/'>
                                    create account quick
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={clsx(style.content, 'h-[447.26px]')}>
                <Slideshow slideWith={978.4} containerWith={978.4} />
            </div>
            <MovieSelection />
            <Event />
        </>
    );
};

export default HomePage;
