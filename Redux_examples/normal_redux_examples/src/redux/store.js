// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productReducer } from './reducer/productReducer';
import { thunk } from 'redux-thunk'; // Correct import
import { authReducer } from './reducer/authReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, productReducer);

const store = configureStore({
  reducer: {
      auth: authReducer,
    products: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export const persistor = persistStore(store);
export default store; // Consistent default export