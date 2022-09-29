import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCollectionById } from "redux/actions/collectionAction";

const CollectionHeader = () => {
  //handle the routes
  const [ncollection,setcollection]=useState()
  const router = useRouter();
  const collection_id = router.query.id;

  const dispatch = useDispatch();
  

  useEffect(() => {
   getCollectionById(dispatch, collection_id);
   setcollection(collection)
  }, [dispatch, collection_id]);
  //get relevent collection
  const collection = useSelector((state) => state.collection.collection);
  console.log(ncollection)
  //const collection = collections.find((item) => item._id == collection_id);
 // console.log(collection);

  return (
    <div>
      <div className="relative">
        <img
          src={ncollection?.bannerImg} // cover image
          className="w-full h-48 md:h-80"
          alt="Image alt text"
        />
        <img
          src={ncollection?.profileImg} // profile image
          className="absolute inset-y-28 left-16 md:inset-y-52  md:bottom-32 bg-purple-300 rounded-full h-36 w-36 md:h-56 md:w-56 "
        >
          {/* <img src="/im.jpg" class="object-cover" alt="Image alt text" /> */}
        </img>
      </div>

      <div className="flex flex-col items-start justify-center mt-20 ml-6 md:mt-36">
        <h1 className="text-2xl font-bold text-gray-900">{ncollection?.collectionName}</h1>
        <p className="text-gray-500">{ncollection?.description}</p>
        <p className="text-gray-500">
          The photographs describes the fight of young souls seeking escape from
          old rituals in order to build their own story and future.
        </p>
      </div>
    </div>
  );
};

export default CollectionHeader;
