import { getNFTFailure, getNFTSuccess } from "redux/slices/NFTSlice";
import { publicRequest, userRequest } from "/utils/requestMethods";

//add NFT
export const addNFTs = async (dispatch, newNFT) => {
	try {
		const res = await publicRequest.post(`/nft`, newNFT);

		console.log(res.data);
	} catch (err) {}
};

//get all NFT
export const getAllNFTs = async (dispatch) => {
	try {
		const res = await publicRequest.get(`/nft`);
		//console.log(res.data)
		dispatch(getNFTSuccess(res.data));
	} catch (err) {
		dispatch(getNFTFailure());
	}
};

//get  NFT by collection id
export const getNFTsByCollectionId = async (dispatch, collection_id) => {
	try {
		const res = await publicRequest.get(`/nft/collection/${collection_id}`);
		//console.log(res.data)
		dispatch(getNFTSuccess(res.data));
	} catch (err) {
		dispatch(getNFTFailure());
	}
};

//get  NFT by collection id
export const getNFTsByNftId = async (dispatch, nft_id) => {
	try {
		const res = await publicRequest.get(`/nft/collection/${collection_id}`);
		//console.log(res.data)
		dispatch(getNFTSuccess(res.data));
	} catch (err) {
		dispatch(getNFTFailure());
	}
};
