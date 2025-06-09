import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  id: "",
  value: "",
  canCreateRole: false,
  email: "",
  login: "",
  userId: ""
};

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
      updateUserResult: (state, action) => {
        return {
          ...state,
            userId: action.payload.userId,
            email: action.payload.email,
            login: action.payload.login,
            canCreateRole: action.payload.canCreateRole,
        }
      },
      updateAuthResult: (state, action) => {
        return {
          ...state,
            id: action.payload.id,
            value: action.payload.value,
        };
      },
      clear: (state, action) => {
        return {
          ...state,
            id: "",
            value: "",
            canCreateRole: false,
            email: "",
            login: "",
            userId: ""
        };
      },
    },
  })

export const { updateUserResult, updateAuthResult, clear } = currentUserSlice.actions;

export default currentUserSlice.reducer;