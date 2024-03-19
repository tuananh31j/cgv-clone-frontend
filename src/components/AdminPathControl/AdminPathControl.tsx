import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authApi from '~/api/authApi';
import NotFound from '~/pages/NotFound';
import { RootState } from '~/store/store';
import { ICustomer } from '~/types/Customer';
import AuthPathControl from '../AuthPathControl';

const AdminPathControl = ({ children }: { children: React.ReactNode }) => {
    const me = useSelector((state: RootState) => state.auth.login.currentUser);
    if (me && me.role !== 'admin') return <NotFound />;

    return <AuthPathControl>{children}</AuthPathControl>;
};

export default AdminPathControl;
