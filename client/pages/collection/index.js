import React, { useEffect, useState } from "react";
import Collectioncard from "components/Collectioncard";
import { getAllCollections } from "redux/actions/collectionAction";
import { useDispatch, useSelector } from "react-redux";

const explorecollection = () => {
  const dispatch = useDispatch();
  const [mycollection,setCollection]=useState([])
  const collections = useSelector((state) => state.collection.collections);

  useEffect(() => {
    if(collections==[]) {getAllCollections(dispatch);}
	else {setCollection(collections)}
  }, [dispatch]);

  return (
    <div className="overflow-hidden">
      <h1 className="text-6xl  font-mono tracking-tight text-bold dark:text-white">
        Explore Collections
      </h1>

      <div className="flex flex-wrap w-full">
         {mycollection.map((collection) => (
            <Collectioncard key={collection._id} collection={collection} /> 		
        ))} 
      </div>
    </div>
  );
};

export default explorecollection;
