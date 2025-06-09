import { configureStore } from '@reduxjs/toolkit';
import currentUserSlice from './user/slices';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
    }),
});

const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();
const { dispatch } = store;
const persister = persistStore(store);
export const exportedObject = {
  store,
  dispatch,
  persister,
  useSelector,
  useDispatch
};
export default exportedObject;