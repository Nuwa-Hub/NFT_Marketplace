import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  NFTs: [],
  isFetching: false,
  error: false,
}

export const NFTSlice = createSlice({
  name: 'NFT',
  initialState,
  reducers: {
     //GET ALL
     getNFTStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getNFTSuccess: (state, action) => {
      state.isFetching = false;
      state.NFTs = action.payload;
    },
    getNFTFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateNFTSuccess: (state, action) => {
      state.isFetching = false;
      state.NFTs = action.payload;
      state.NFTs[
        state.NFTs.findIndex((item) => item._id === action.payload._id)
      ] = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getNFTFailure,getNFTSuccess,getNFTStart,updateNFTSuccess } = NFTSlice.actions

export const selectValue= (state)=>state.NFT.value

export default NFTSlice.reducer