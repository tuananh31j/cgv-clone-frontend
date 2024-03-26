import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className=' h-[60vh] w-[20vw]'>
            <div>
                <h1 className='py-3 text-center text-2xl font-semibold uppercase text-red-700'>Tai khoan cgv</h1>
            </div>
            <div className='my-4 flex flex-col gap-y-3'>
                <NavLink
                    to={'/account'}
                    end
                    className={({ isActive }) => {
                        const classActive = isActive ? 'scale-110 bg-red-700 font-medium text-white' : '';
                        return `rounded-sm border border-red-700 p-2 transition-transform duration-150 ease-in-out ${classActive}`;
                    }}
                >
                    Thong tin chung
                </NavLink>
                <NavLink
                    to={'my-ticket'}
                    className={({ isActive }) => {
                        const classActive = isActive ? 'scale-110 bg-red-700 font-medium text-white' : '';
                        return `rounded-sm border border-red-700 p-2 transition-transform duration-150 ease-in-out ${classActive}`;
                    }}
                >
                    Ve cua toi
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
