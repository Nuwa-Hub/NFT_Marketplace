import React from "react";
import Collectioncard from "components/Collectioncard";

const explorecollection = () => {
  return (
    <div>
      <h1 className="text-6xl ml-6 mt-5 font-bold">Explore Collection</h1>
      <div className="overflow-hidden text-gray-700">
        <div className=" px-1 py-1 mx-auto lg:pt-12 lg:px-2 ">
          <div className="flex flex-wrap -m-1 md:-m-2 ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
              <Collectioncard key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default explorecollection;
