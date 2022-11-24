import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
  } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from "./RootReducer";

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['simpsonsState'],
    
  };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);

export type RootStore = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store 