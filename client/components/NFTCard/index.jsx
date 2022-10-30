import React, { useState } from "react";


const index = () => {
 //console.log(nft)
  return (
    <div className="nft">
      <div className="main flex flex-col p-4 w-full">
        <img
          className="tokenImage rounded-lg h-64 max-w-full object-cover"
          src="/dog1.jpg"
          alt="NFT"
        />
        <h2>Candlemass</h2>
        <div className="tokenInfo flex items-center justify-between">
          <div className="price">
            <ins>$</ins>
            <p>10 ETH</p>
          </div>
          <div className="duration">
            <ins>Rarity:</ins>
            <p style={{ color: "orange" }}>LEGENDARY</p>
          </div>
        </div>
        <div>
          <p style={{ margin: "10px 0px" }}>
            Category: <span>dsdf</span>{" "}
          </p>
        </div>
        <div></div>
        <hr />
        <div className="creator">
          <p style={{ width: "50%" }}>
            <ins>Supply:</ins> 666
          </p>
          <button
            type="button"
            className=" btn-primary"
            style={{
              width: "50%",
              padding: "10px",
              fontSize: "15px",
              background:
                "linear-gradient(0deg, #282c34 0%, rgba(17, 0, 32, 0.5) 100%)",
              border: "1px solid #383838",
              color: "#ee83e5",
              fontWeight: "800",
            }}
          >
            Primary
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
