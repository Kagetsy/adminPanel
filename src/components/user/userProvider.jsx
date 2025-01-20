import React, { useState, useEffect } from 'react';
import { UserInfo } from '../../ts/entities/userInfo';
export const UserContext = React.createContext({});

const getInitialState = () => {
    const currentUser = sessionStorage.getItem("currentUser");
    const userInfo = new UserInfo();
    return currentUser ? JSON.parse(currentUser) :  userInfo;
  }

export default function UserProvider({children}) {
    const [user, setUser] = useState(getInitialState());

    useEffect(() => {
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        debugger;
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}