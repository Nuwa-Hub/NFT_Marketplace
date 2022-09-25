
import { configureStore } from '@reduxjs/toolkit'
import adminSlices from './slices/adminSlices'
import collectionSlice from './slices/collectionSlice'
import userSlice from './slices/userSlice'
export const store = configureStore({
  reducer: {
    collection: collectionSlice,
    user: userSlice,
    admin: adminSlices,
  },
})