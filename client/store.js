
import { configureStore } from '@reduxjs/toolkit'
import collectionSlice from './slices/collectionSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
  reducer: {
    counter: collectionSlice,
    user: userSlice,
  },
})