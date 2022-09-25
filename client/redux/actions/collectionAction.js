import { getCollectionFailure, getCollectionSuccess } from "redux/slices/collectionSlice";
import { publicRequest, userRequest } from "/utils/requestMethods";

//add collection
export const addCollections = async (dispatch, newCollection) => {
    try {

      const res = await publicRequest.post(`/collection`, newCollection);
      
      console.log(res.data)
    } catch (err) {}
  };

  //add collection
export const getAllCollections = async (dispatch) => {
    try {

      const res = await publicRequest.get(`/collection`);
      console.log(res.data)
      dispatch(getCollectionSuccess(res.data));
    } catch (err) {
        dispatch(getCollectionFailure())
    }
  };