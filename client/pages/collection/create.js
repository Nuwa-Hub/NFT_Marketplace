import CreateCollection from "components/createCollection";
import React from "react";
import { useSelector } from "react-redux";
import { addCollections } from "redux/apiCalls";
import { selectValue } from "redux/slices/collectionSlice";
import { IPFSInput, Input, Select, TextArea } from "web3uikit";

const createcollection = () => {
	
	addCollections();
	return (
		<div className="m-12">
			<CreateCollection/>
		</div>
	);
};

export default createcollection;
