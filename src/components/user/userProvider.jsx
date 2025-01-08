import React, { useState, useEffect } from 'react';
export const UserContext = React.createContext({});

const getInitialState = () => {
    const currentUser = sessionStorage.getItem("currentUser");
    return currentUser ? JSON.parse(currentUser) : { id : "", value : "", login : "", canCreateRole : false, email : "" }
  }

export default function UserProvider({children}) {
    const [user, setUser] = useState(getInitialState);

    useEffect(() => {
        sessionStorage.setItem("currentUser", JSON.stringify(user))
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}