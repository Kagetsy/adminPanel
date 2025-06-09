import React, { useState, useEffect } from 'react';
import { selectUser } from '../store/user/selectors';
import { useSelector } from 'react-redux';

export const UserContext = React.createContext({});

export default function UserProvider({children}) {
    const state = useSelector(selectUser);

    return (
        <UserContext.Provider value={{ state }}>
            {children}
        </UserContext.Provider>
    );
}
