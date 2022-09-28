import NFTCard from "components/NFTCard";
import React, { useEffect, useState } from "react";
import MarketplaceJSON from './Marketplace.json';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getNFTSuccess } from "redux/slices/NFTSlice";

const exploreNFT = () => {
 
  const ethers = require("ethers");
  const dispatch=useDispatch()

  async function getAllNFTs() {
    
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    //Pull the deployed contract instance
    let contract = new ethers.Contract(
      MarketplaceJSON.address,
      MarketplaceJSON.abi,
      signer
    );
    //create an NFT Token
    let transaction = await contract.getAllNFTs();

    //Fetch all the details of every NFT from the contract and display
    const items = await Promise.all(
      transaction.map(async (i) => {
        const tokenURI = await contract.tokenURI(i.tokenId);
        let meta = await axios.get(tokenURI);
        meta = meta.data;

        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.image,
          name: meta.name,
          description: meta.description,
        };
        return item;
      })
    );

  
    dispatch(getNFTSuccess(items))
  }
	useEffect(() => {
		getAllNFTs();
	}, []);
  //if (!dataFetched)  getAllNFTs();
const getnfts=useSelector((state) => state.NFT.NFTs)

console.log(getnfts)

  return (
    <div className="overflow-hidden">
      <h1 className="text-6xl mt-3 font-mono tracking-tight text-bold dark:text-white">
        Explore NFTs
      </h1>
      <div className="overflow-hidden text-gray-700">
        <div className="px-1 py-1 mx-auto lg:pt-12 lg:px-2">
          <div className="flex flex-wrap -m-1 md:-m-2 ">
            {getnfts.length>0 && getnfts.map((item,index) => (
              <div
                className="flex flex-wrap w-full  sm:w-full md:w-1/2 lg:w-1/4"
                key={index}
              >
                <NFTCard nft={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default exploreNFT;
