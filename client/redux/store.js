
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import adminSlices from './slices/adminSlices'
import collectionSlice from './slices/collectionSlice'
import userSlice from './slices/userSlice'
import NFTSlice from './slices/NFTSlice'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: "root",
  version: 1,
  storage:AsyncStorage,
};

const rootReducer = combineReducers({
  collection: collectionSlice,
     user: userSlice,
     admin: adminSlices,
     NFT:NFTSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);


// export const store = configureStore({
//   reducer: {
//     collection: collectionSlice,
//     user: userSlice,
//     admin: adminSlices,
//     NFT:NFTSlice
//   },
// })