import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  collections: [],
  isFetching: false,
  error: false,
}

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
     //GET ALL
     getCollectionStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCollectionSuccess: (state, action) => {
      state.isFetching = false;
      state.collections = action.payload;
    },
    getCollectionFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getCollectionFailure,getCollectionSuccess,getCollectionStart } = collectionSlice.actions

export const selectValue= (state)=>state.collection.value

export default collectionSlice.reducer