import React, { useContext } from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../user/userProvider';
import Menu from '../menu/menu';

export default function BaseLayout() {
    const { user } = useContext(UserContext);
    const location = useLocation();
    if (user.id !== undefined && user.id !== "" && user.value !== undefined && user.value !== "")
        return (
            <>
                <Menu />
                <Outlet />
            </>);
    else
        return <Navigate to="/login" replace state={{ from: location }} />;
}