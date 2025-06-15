import { configureStore } from '@reduxjs/toolkit';
import currentUserSlice from './user/slices';
import { useSelector as useAppSelector } from 'react-redux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, currentUserSlice);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk),
});

const useSelector = useAppSelector;
const { dispatch } = store;
const persister = persistStore(store);
export const exportedObject = {
  store,
  dispatch,
  persister,
  useSelector
};
export default exportedObject;