import React from "react";
import axios from "axios";
import { useState } from "react";

const collectionpage = () => {
  async function getAllNFTs() {
    //Fetch all the details of every NFT from the contract and display
    let tokenURI="https://gateway.pinata.cloud/ipfs/QmQWnA93b5au9Wc72eJx7JitQzBZfTx7LXTRk9ND9mhkMC"
    let meta = await axios.get(tokenURI);
    meta = meta.data;
    console.log(meta)
  }
  getAllNFTs()
  return <div>collectionpage</div>;
};

export default collectionpage;
