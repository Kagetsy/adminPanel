import React from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom';
import MenuComponent from './menu/menu';
import "../../css/homeForm.css";
import { useSelector } from 'react-redux';
import { isAuthtorizedSelector } from '../store/user/selectors'; 

export default function BaseLayout() {
    const location = useLocation();
    if (useSelector(isAuthtorizedSelector))
        return (
            <>
                <MenuComponent />
                <Outlet />
            </>);
    else
        return <Navigate to="/login" replace state={{ from: location }} />;
}