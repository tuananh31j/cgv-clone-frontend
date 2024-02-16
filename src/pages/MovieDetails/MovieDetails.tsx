import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { MouseEventHandler, useState } from 'react';
import Image from '~/assets';
import Button from '~/components/Button';
import styles from './MovieDetails.module.scss';
import ImageMagnifier from '~/components/ImageMagnifier';
import ToggleTabs from '~/components/ToggleTabs';

const MovieDetails = () => {
    const Tab1 = () => {
        console.log(1);

        return (
            <span className='text-sm'>
                "Mai" xoay quanh cuộc đời của một người phụ nữ đẹp tên Mai (do Phương Anh Đào thủ vai) có số phận rất
                đặc biệt. Bởi làm nghề mát xa, Mai thường phải đối mặt với ánh nhìn soi mói, phán xét từ những người
                xung quanh. Và rồi Mai gặp Dương (Tuấn Trần) - chàng trai đào hoa lãng tử. Những tưởng bản thân không
                còn thiết tha yêu đương và mưu cầu hạnh phúc cho riêng mình thì khao khát được sống một cuộc đời mới
                trong Mai trỗi dậy khi Dương tấn công cô không khoan nhượng. Họ cho mình những khoảnh khắc tự do, say
                đắm và tràn đầy tiếng cười. Liệu cặp đôi ấy có nắm giữ được niềm hạnh phúc đó dài lâu khi miệng đời lắm
                khi cay nghiệt, bất công? "Mai" - một câu chuyện tâm lý, tình cảm pha lẫn nhiều tràng cười vui nhộn với
                sự đầu tư mạnh tay nhất trong ba phim của Trấn Thành hứa hẹn sẽ đem đến cho khán giả những phút giây
                thật sự ý nghĩa trong mùa Tết năm nay.
            </span>
        );
    };

    const Tab2 = () => {
        console.log(2);

        return <iframe width='560' height='315' src='//www.youtube.com/embed/gAmW3kvgMok' allowFullScreen></iframe>;
    };
    return (
        <div className='container-box'>
            <div className='border-b-2 border-black mb-7'>
                <h1 className='font-semibold text-3xl py-4'>Nội Dung Phim</h1>
            </div>
            <div className='flex gap-6 mb-8'>
                <div className='relative '>
                    <ImageMagnifier image={Image.itemCard1} />
                </div>

                <div className='w-4/5'>
                    <div className='border-b-[1px] border-gray-300 '>
                        <h1 className='uppercase font-semibold text-2xl pb-7'>Mật vụ ong</h1>
                    </div>
                    <div>
                        <p>
                            <span className='font-bold'>Đạo diễn:</span> David Ayer
                        </p>
                        <p>
                            <span className='font-bold'>Diễn viên:</span> Jason Statham, Emmy Raver-Lampman, Josh
                            Hutcherson
                        </p>
                        <p>
                            <span className='font-bold'>Thể loại:</span> Hàng động
                        </p>
                        <p>
                            <span className='font-bold'>Khởi chiếu:</span> 12/01/2024
                        </p>
                        <p>
                            <span className='font-bold'>Thời lượng:</span> 150 phút
                        </p>
                        <p>
                            <span className='font-bold'>Ngôn ngữ:</span> Tiếng Anh - Phụ đề Tiếng Việt
                        </p>
                        <p>
                            <span className='font-bold'>Rated:</span>{' '}
                            <span className='font-bold uppercase'>
                                T18 - Phim được phổ biến đến người xem từ đủ 18 tuổi trở lên (18+)
                            </span>
                        </p>
                        <p>
                            <span>T18</span>
                            <span>starium</span>
                        </p>
                    </div>
                    <div className='inline-flex gap-3 items-end mt-3'>
                        <Button small className='bg-blue-600 text-white'>
                            <FontAwesomeIcon className='me-1' icon={faThumbsUp} />
                            Like <span>10</span>
                        </Button>
                        <Button iconLeft={<img src={Image.iconPurchareTicket} />} large href='/oôk' primary inLine>
                            Mua vé
                        </Button>
                    </div>
                </div>
            </div>
            <ToggleTabs tabName={{ tab1: 'Chi tiết', tab2: 'Trailer' }} Content={{ Tab1, Tab2 }} />
        </div>
    );
};

export default MovieDetails;
