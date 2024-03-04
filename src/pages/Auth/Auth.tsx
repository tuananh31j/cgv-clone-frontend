import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Input from '~/components/Input/Input';
import Slideshow from '~/components/Slideshow';

const Auth = () => {
    return (
        <div className='container-box'>
            <div className='grid grid-cols-2 gap-4 items-start '>
                <div>
                    <div className='bg-[#e71a0f] text-white flex justify-evenly p-2 my-8 uppercase'>
                        <NavLink
                            className={({ isActive }) => {
                                const activeClass = isActive ? 'border-b-2 border-white' : '';

                                return `${activeClass} p-2 uppercase font-bold`;
                            }}
                            to='/login'
                        >
                            Đăng nhập
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => {
                                const activeClass = isActive ? 'border-b-2 border-white' : '';

                                return `${activeClass} p-2 uppercase font-bold`;
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
