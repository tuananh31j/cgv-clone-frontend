import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Input from '~/components/Input/Input';
import Slideshow from '~/components/Slideshow';

const Auth = () => {
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
                <div>
                    <Slideshow slideWith={900} data={[1, 2, 3, 4, 5, 6]}></Slideshow>
                </div>
            </div>
        </div>
    );
};

export default Auth;
