import React, { useEffect } from "react";
import Collectioncard from "components/Collectioncard";
import { getAllCollections } from "redux/actions/collectionAction";
import { useDispatch, useSelector } from "react-redux";

const explorecollection = () => {
	const dispatch = useDispatch();

	const collections = useSelector((state) => state.collection.collections);

	useEffect(() => {
		getAllCollections(dispatch);
	}, [dispatch]);

	return (
		<div className="overflow-hidden">
			<h1 className="text-6xl  font-mono tracking-tight text-bold dark:text-white">
				Explore Collections
			</h1>
			<div className="overflow-hidden text-gray-700">
				<div className="px-1 py-1 mx-auto lg:pt-12 lg:px-2">
					<div className="flex flex-wrap -m-1 md:-m-2 ">
						{collections.map((collection) => (
							<div
								className="flex flex-wrap w-full  sm:w-full md:w-1/2 lg:w-1/3"
								key={collection._id}
							>
								<Collectioncard
									key={collection._id}
									collection={collection}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default explorecollection;
