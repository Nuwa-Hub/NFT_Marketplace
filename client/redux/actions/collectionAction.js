import {
  getCollectionFailure,
  getCollectionsFailure,
  getCollectionsSuccess,
  getCollectionSuccess,
} from "redux/slices/collectionSlice";
import { publicRequest, userRequest } from "/utils/requestMethods";

//add collection
export const addCollections = async (dispatch, newCollection) => {
  try {
    const res = await publicRequest.post(`/collection`, newCollection);

    console.log(res.data);
  } catch (err) {}
};

//get all collections
export const getAllCollections = async (dispatch) => {
  try {
    const res = await publicRequest.get(`/collection`);
    console.log(res.data);
    dispatch(getCollectionsSuccess(res.data));
  } catch (err) {
    dispatch(getCollectionsFailure());
  }
};

//get all collection by id
export const getAllCollection = async (dispatch) => {
  try {
    const res = await publicRequest.get(`/collection`);
    console.log(res.data);
    dispatch(getCollectionSuccess(res.data));
  } catch (err) {
    dispatch(getCollectionFailure());
  }
};
