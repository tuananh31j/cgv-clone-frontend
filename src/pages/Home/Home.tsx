import clsx from 'clsx';
import style from './Home.module.scss';

import React from 'react';

import Slideshow from '~/components/Slideshow';
import MovieSelection from '~/components/MovieSelection';
import Event from '~/components/Event';

const HomePage = () => {
    return (
        <>
            <div className='container-box mx-auto mt-8'>
                <div>
                    <div className='wibget mt-7 border-b border-solid border-black'>
                        <ul
                            className={clsx(
                                style.wibget__nav,
                                ' mb-[10px] flex gap-4 border-b border-solid border-black pb-9 '
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
                <Slideshow slideWith={978.4} data={[1, 2, 3, 4, 5]} />
            </div>
            <MovieSelection />
            <Event />
        </>
    );
};

export default HomePage;
