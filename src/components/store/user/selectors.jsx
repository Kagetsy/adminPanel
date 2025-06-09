import { createSelector } from '@reduxjs/toolkit';

const selectUserInfo = (state) => {
  return state;
}
const selectIsAuthtorized = (state) => {
        if (state === null)
          return false;
        return state.id !== undefined &&
        state.id !== "" &&
        state.value !== undefined &&
        state.value !== "";
}

export const selectUser = createSelector([selectUserInfo], (d) => d);
export const isAuthtorizedSelector = createSelector([selectIsAuthtorized], (d) => d);
