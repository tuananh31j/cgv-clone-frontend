import { NavLink, Outlet } from 'react-router-dom';
import bannerApi from '~/api/bannerApi';
import Slideshow from '~/components/Slideshow';
import useAsync from '~/hooks/useAsync';
import { IBanner } from '~/types/Banner';

const Auth = () => {
    const { value: banners } = useAsync<IBanner[] | []>(async () => {
        try {
            const { data } = await bannerApi.getBannerActive();
            return data;
        } catch (error) {
            return [];
        }
    });
    return (
        <div className='container-box'>
            <div className='grid grid-cols-2 items-start gap-4 '>
                <div>
                    <div className='my-8 flex justify-evenly bg-[#e71a0f] p-2 uppercase text-white'>
                        <NavLink
                            className={({ isActive }) => {
                                const activeClass = isActive ? 'border-b-2 border-white' : '';

                                return `${activeClass} p-2 font-bold uppercase`;
                            }}
                            to='/login'
                        >
                            Đăng nhập
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => {
                                const activeClass = isActive ? 'border-b-2 border-white' : '';

                                return `${activeClass} p-2 font-bold uppercase`;
                            }}
                            to='/register'
                        >
                            Đăng ký
                        </NavLink>
                    </div>
                    <div className='m-4'>
                        <Outlet />
                    </div>
                </div>
                <div className=''>{banners && <Slideshow data={banners}></Slideshow>}</div>
            </div>
        </div>
    );
};

export default Auth;
