import React, { useState, useEffect } from 'react';
import { UserInfo } from '../../ts/entities/userInfo';
import { createSlice, configureStore } from '@reduxjs/toolkit';
export const UserContext = React.createContext({});

const getInitialState = () => {
    const currentUser = sessionStorage.getItem("currentUser");
    const userInfo = new UserInfo();
    return currentUser ? JSON.parse(currentUser) :  userInfo;
}

const counterSlice = createSlice({
    name: 'userInfo',
    initialState: {
      value: getInitialState()
    },
    reducers: {
        update: state => {
        state.value += 1
      },
      clear: state => {
        state.value -= 1
      }
    }
  })

  
export const { update, clear } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer
});

store.subscribe(() => console.log(store.getState()));

export default function UserProvider({children}) {
    const [user, setUser] = useState(getInitialState());

      
    useEffect(() => {
        sessionStorage.setItem("currentUser", JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}