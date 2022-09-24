
import { configureStore } from '@reduxjs/toolkit'
import collectionSlice from './slices/collectionSlice'

export const store = configureStore({
    reducer: {
        collection: collectionSlice,
      },
})