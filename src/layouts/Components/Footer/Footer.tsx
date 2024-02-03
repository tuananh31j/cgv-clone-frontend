import Image from '~/assets';
import style from './Footer.module.scss';
import clsx from 'clsx';

const Footer = () => {
    return (
        <>
            <div className={clsx(style.footer, 'bg-repeat-x bg-scroll  bg-bottom mt-8 pb-36')}>
                <div className={clsx(style.footer__brand__slice, 'border border-y-[2.2px] py-2 border-black')}>
                    <div className={clsx(style.footer__brand__slice__nav, 'mx-auto')}>
                        <ul className={clsx('flex gap-4 justify-center')}>
                            <li>
                                <a className='dx' href='https://www.cgv.vn/default/theaters/special/4dx'>
                                    4DX
                                </a>
                            </li>
                            <li>
                                <a className='imax' href='https://www.cgv.vn/default/theaters/special/imax'>
                                    Imax
                                </a>
                            </li>
                            <li>
                                <a className='starium' href='https://www.cgv.vn/default/theaters/special/starium'>
                                    Starium
                                </a>
                            </li>
                            <li>
                                <a className='gold-class' href='https://www.cgv.vn/default/theaters/special/gold-class'>
                                    Goldclass
                                </a>
                            </li>
                            <li>
                                <a className='lamour' href='https://www.cgv.vn/default/theaters/special/lamour'>
                                    L'amour
                                </a>
                            </li>
                            <li>
                                <a className='sweet' href='https://www.cgv.vn/default/theaters/special/sweetbox'>
                                    Sweetbox
                                </a>
                            </li>
                            <li>
                                <a
                                    className='premium-cinema'
                                    href='https://www.cgv.vn/default/theaters/special/premium'
                                >
                                    Premium Cinema
                                </a>
                            </li>
                            <li>
                                <a className='screenx' href='https://www.cgv.vn/default/theaters/special/screenx'>
                                    Screenx
                                </a>
                            </li>
                            <li>
                                <a className='cine-foret' href='https://www.cgv.vn/default/theaters/special/cine-foret'>
                                    Cine &amp; Foret
                                </a>
                            </li>
                            <li>
                                <a
                                    className='cine-livingroom'
                                    href='https://www.cgv.vn/default/theaters/special/cine-living'
                                >
                                    Cine &amp; Living Room
                                </a>
                            </li>
                            <li>
                                <a className='cine-suite' href='https://www.cgv.vn/default/theaters/special/cine-suite'>
                                    Cine Suite
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='text-[#636363] mx-auto footer__cgv__policy max-w-[978.4px]'>
                    <div>
                        <div>
                            <h1 className='uppercase text-xl font-bold '>cgv việt nam</h1>
                            <ul>
                                <li>
                                    <a href=''>Giới Thiệu</a>
                                </li>
                                <li>
                                    <a href=''>Tiện Ích Online</a>
                                </li>
                                <li>
                                    <a href=''>Thẻ Quà Tặng</a>
                                </li>
                                <li>
                                    <a href=''>Tuyển Dụng</a>
                                </li>
                                <li>
                                    <a href=''>Liên hệ Quảng Cáo CGV</a>
                                </li>
                                <li>
                                    <a href=''>Dành cho đối tác</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className='uppercase text-xl font-bold '>Điều khoản sử dụng</h1>
                            <ul>
                                <li>
                                    <a href=''>Điều Khoản Chung</a>
                                </li>
                                <li>
                                    <a href=''>Điều Khoản Giao Dịch</a>
                                </li>
                                <li>
                                    <a href=''>Chính Sách Thanh Toán</a>
                                </li>
                                <li>
                                    <a href=''>Chính Sách bảo Mật</a>
                                </li>
                                <li>
                                    <a href=''>Câu Hỏi Thường Gặp</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className='uppercase text-xl font-bold '>Kết nối với chúng tôi</h1>
                            <ul>
                                <li>
                                    <a href=''>Điều Khoản Chung</a>
                                </li>
                                <li>
                                    <a href=''>Điều Khoản Giao Dịch</a>
                                </li>
                                <li>
                                    <a href=''>Chính Sách Thanh Toán</a>
                                </li>
                            </ul>
                            <div>
                                <a href=''>
                                    <img src={Image.iconLicense} alt='' />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h1 className='uppercase text-xl font-bold '>Chăm sóc khách hàng</h1>
                            <ul>
                                <li>
                                    <a href=''>Hotline: 1900 6017</a>
                                </li>
                                <li>
                                    <a href=''>Giờ làm việc: 8:00 - 22:00 {'(Tất cả các ngày bao gồm cả Lễ Tết)'}</a>
                                </li>
                                <li>
                                    <a href=''>Email hỗ trợ: hoidap@cgv.vn</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer__cgv__address'>diaj chi</div>
            </div>
        </>
    );
};

export default Footer;
