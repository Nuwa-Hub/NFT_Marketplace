import { publicRequest, userRequest } from "../utils/requestMethods";

//collection api calls

//add collection
export const addCollections = async () => {
  try {
    
    const collection={
        "collectionName":"nuwan"
    }

    const res = await publicRequest.post(`/collection`, collection);
    
    console.log(res.data)
  } catch (err) {}
};
