import React, { useContext } from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../user/userProvider';
import MenuComponent from './menu/menu';
import "../../css/homeForm.css";

export default function BaseLayout() {
    const { user } = useContext(UserContext);
    const location = useLocation();
    if (user.id !== undefined && user.id !== "" && user.value !== undefined && user.value !== "")
        return (
            <>
                <MenuComponent />
                <Outlet />
            </>);
    else
        return <Navigate to="/login" replace state={{ from: location }} />;
}