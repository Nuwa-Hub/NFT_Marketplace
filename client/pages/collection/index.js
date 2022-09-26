import React, { useEffect } from "react";
import Collectioncard from "components/Collectioncard";
import { getAllCollections } from "redux/actions/collectionAction";
import { useDispatch, useSelector } from "react-redux";

const explorecollection = () => {
  const dispatch = useDispatch()

  const collections = useSelector((state) => state.collection.collections);

  useEffect(() => {
    getAllCollections(dispatch);
  }, [dispatch]);

  return (
    <div className="overflow-hidden">
      <h1 className="text-6xl ml-6 mt-5 font-bold">Explore Collection</h1>
      <div className="overflow-hidden text-gray-700">
        <div className="px-1 py-1 mx-auto lg:pt-12 lg:px-2">
          <div className="flex flex-wrap -m-1 md:-m-2 ">
            {collections.map((collection) => (
          
              <Collectioncard key={collection._id}  collection={collection}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default explorecollection;
