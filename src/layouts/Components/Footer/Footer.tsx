import Image from '~/assets';
import style from './Footer.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSquareInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Icons from '~/components/Icons';

const Footer = () => {
    return (
        <>
            <div className={clsx(style.footer, 'bg-repeat-x bg-scroll  bg-bottom mt-8 pb-36')}>
                <div className={clsx(style.footer__brand__slice, ' border-y-[2.2px] py-2 border-black')}>
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
                    <div className='grid grid-cols-4 grid-rows-1'>
                        <div>
                            <h1 className=' text-md font-bold mt-5 mb-3'>CGV Việt Nam</h1>
                            <ul className='text-md'>
                                <li>
                                    <a href=''>Giới thiệu</a>
                                </li>
                                <li>
                                    <a href=''>Tiện ích online</a>
                                </li>
                                <li>
                                    <a href=''>Thẻ quà tặng</a>
                                </li>
                                <li>
                                    <a href=''>Tuyển dụng</a>
                                </li>
                                <li>
                                    <a href=''>Liên hệ quảng cáo CGV</a>
                                </li>
                                <li>
                                    <a href=''>Dành cho đối tác</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className=' text-md font-bold mt-5 mb-3'>Điều khoản sử dụng</h1>
                            <ul className='text-md'>
                                <li>
                                    <a href=''>Điều khoản chung</a>
                                </li>
                                <li>
                                    <a href=''>Điều khoản giao dịch</a>
                                </li>
                                <li>
                                    <a href=''>Chính sách thanh toán</a>
                                </li>
                                <li>
                                    <a href=''>Chính sách bảo mật</a>
                                </li>
                                <li>
                                    <a href=''>Câu hỏi thường gặp</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className=' text-md font-bold mt-5 mb-3'>Kết nối với chúng tôi</h1>
                            <ul className='flex gap-1 items-center my-2'>
                                <li>
                                    <a href=''>
                                        <FontAwesomeIcon className='text-blue-700 w-10 text-[34px]' icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a href=''>
                                        <FontAwesomeIcon className='text-red-500 w-10 text-[34px]' icon={faYoutube} />
                                    </a>
                                </li>{' '}
                                <li>
                                    <a href=''>
                                        <Icons.IstagramIcon className='w-10' />
                                    </a>
                                </li>
                                <li>
                                    <a href=''>
                                        <Icons.ZaloIcons className='w-10' />
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <a href=''>
                                    <img src={Image.iconLicense} alt='' />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h1 className=' text-md font-bold mt-5 mb-3'>Chăm sóc khách hàng</h1>
                            <ul className='text-md'>
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
                <div className='border-t-2 border-black w-full my-3 mt-4'>
                    {' '}
                    <div className='footer__cgv__address text-[#636363] mx-auto max-w-[978.4px]  '>
                        <div className='flex items-center'>
                            <div className='w-[20%]'>
                                <img className='w-full' src={Image.cjcgv} alt='' />
                            </div>
                            <div>
                                <h1 className=' text-md font-bold mt-5 mb-3 uppercase'>Công ty TNHH CJ CGV Việt Nam</h1>
                                <ul className='w-10/12 text-sm'>
                                    <li>
                                        <p className=''>
                                            Giấy Chứng nhận đăng ký doanh nghiệp: 0303675393 đăng ký lần đầu ngày
                                            31/7/2008, được cấp bởi Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh
                                        </p>
                                    </li>
                                    <li>
                                        <p className=''>
                                            Địa chỉ: Lầu 2, số 7/28, Đường Thành Thái, Phường 14, Quận 10, Thành phố Hồ
                                            Chí Minh, Việt Nam
                                        </p>
                                    </li>
                                    <li>
                                        <p className=''>Đường dây nóng (Hotline): 1900 6017</p>
                                    </li>
                                    <li>
                                        <p className=''>COPYRIGHT 2017 CJ CGV VIETNAM CO., LTD. ALL RIGHTS RESERVED</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
