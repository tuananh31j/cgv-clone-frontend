import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authApi from '~/api/authApi';
import NotFound from '~/pages/NotFound';
import { RootState } from '~/store/store';
import { ICustomer } from '~/types/Customer';

const AuthPathControl = ({ children }: { children: React.ReactNode }) => {
    const token = useSelector((state: RootState) => state.auth.login.currentUser.accessToken);
    const me = useSelector((state: RootState) => state.auth.login.currentUser);
    if (!token) return <Navigate to={'/login'} />;
    if (token && me && me.role !== 'admin') return <NotFound />;

    return children;
};

export default AuthPathControl;