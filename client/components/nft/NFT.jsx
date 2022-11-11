import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import Accordion_ from "./Accordion";
import Link from "next/link";
import { useRouter } from "next/router";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../../common/pinata";
import Marketplace from "../../common/Marketplace.json";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateNFTByUserId } from "redux/actions/NFTAction";
import HighestBidModal from "./HighestBidModal";
import BuyNowModal from "./BuyNowModal";
import { publicRequest } from "utils/requestMethods";

const Nft = () => {
	const [message, updateMessage] = useState("");
	const [buy, setBuy] = useState(false);
	const [favourite, setFavorite] = useState(false);
	//get current NFT id
	const router = useRouter();
	const nft_id = router.query.id;

	//get current user
	const user = useSelector((state) => state.user.currentUser);

	const distpatch = useDispatch();
	//get relevent nft by NFT array
	const nfts = useSelector((state) => state.NFT.NFTs);
	const nft = nfts.find((item) => item._id == nft_id);
	if (!nft) {
		return <p>not found</p>;
	}
	if (nft_id) {
		publicRequest.get(`nft/${nft_id}`).then((res) => {
			console.log(res.data);
		});
	}
	//console.log(nft);
	//console.log(user);

	//nft blockchain part++++++++++++++++

	//This function uploads the metadata to IPDS
	async function uploadMetadataToIPFS() {
		const nftJSON = {
			name: nft.NFTName,
			description: nft.description,
			image: nft.pinataurl,
		};

		try {
			//upload the metadata JSON to IPFS
			const response = await uploadJSONToIPFS(nftJSON);
			if (response.success === true) {
				console.log("Uploaded JSON to Pinata: ", response);
				return response.pinataURL;
			}
		} catch (e) {
			console.log("error uploading JSON metadata:", e);
		}
	}

	async function listNFT() {
		//Upload data to IPFS
		try {
			const ethers = require("ethers");

			const metadataURL = await uploadMetadataToIPFS();
			//After adding your Hardhat network to your metamask, this code will get providers and signers
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			updateMessage("Please wait.. uploading (upto 5 mins)");

			//Pull the deployed contract instance
			let contract = new ethers.Contract(
				Marketplace.address,
				Marketplace.abi,
				signer
			);

			//massage the params to be sent to the create NFT request
			const price = ethers.utils.parseUnits("0.001", "ether");
			let listingPrice = await contract.getListPrice();
			listingPrice = listingPrice.toString();

			//actually create the NFT

			let transaction = await contract.createToken(metadataURL, price, {
				value: listingPrice,
			});

			await transaction.wait();

			let tid = await contract.getCurrentToken();

			console.log(tid);
			//console.log(transaction)
			const newnft = {
				mint: true,
				tokenId: tid._hex,
				isListed: false,
				owner: user.walletAdress,
			};
			updateNFTByUserId(distpatch, newnft, nft._id);

			alert("Successfully listed your NFT!");

			//window.location.replace("/")
		} catch (e) {
			alert("Upload error" + e);
		}
	}

	const hexToDecimal = (hex) => parseInt(hex, 16);

	async function buyNFT() {
		const tokenId = hexToDecimal(nft.tokenId);
		try {
			const ethers = require("ethers");
			//After adding your Hardhat network to your metamask, this code will get providers and signers
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();

			//Pull the deployed contract instance
			let contract = new ethers.Contract(
				Marketplace.address,
				Marketplace.abi,
				signer
			);
			const salePrice = ethers.utils.parseUnits("0.001", "ether");
			updateMessage("Buying the NFT... Please Wait (Upto 5 mins)");
			//run the executeSale function
			let transaction = await contract.executeSale(tokenId, {
				value: salePrice,
			});
			await transaction.wait();

			const newnft = { isListed: false, owner: user.walletAdress };
			updateNFTByUserId(distpatch, newnft, nft._id);
			alert("You successfully bought the NFT!");
			updateMessage("");
		} catch (e) {
			alert("Upload Error" + e);
		}
	}

	async function executebuyNFT(e) {
		e.preventDefault();
		setBuy(true);
		if (nft.mint == true) {
			console.log("buy");
			await buyNFT();
		} else {
			console.log("mint");
			await listNFT();
		}
	}
	//end of the nft blockchain ++++++++++++++++++++++
	return (
		<div>
			<div className="container px-2 py-2 mx-auto lg:pt-12 lg:px-2">
				<div className="grid grid-cols-1  md:grid-cols-3">
					<div className="items-center">
						<div className="max-w-sm  m-4 bg-zinc-200 rounded-lg border border-gray-200 hover:shadow-lg transition ease-in-out  hover:-translate-y-1 hover:scale-110 ">
							<a href="#">
								<div className="w-full aspect-square ">
									<img
										alt="gallery"
										className="block object-cover object-center w-full h-full rounded-lg"
										src={nft.Img}
									/>
								</div>
							</a>
						</div>
					</div>
					<div className="col-span-2 m-4">
						<div className="mb-2 mx-2">
							<p className=" text-2xl font-bold font-mono tracking-tight text-gray-900 dark:text-white">
								{/* Collection Name */}
								Cryptopuppies
							</p>
						</div>

						<div className="mx-2 mt-5 ">
							<p className="text-5xl font-bold font-mono tracking-tight text-gray-900 dark:text-white">
								{/* NFT Name */}
								{nft.NFTName}
							</p>
						</div>

						<div className="flex flex-auto mx-2 mt-5 content-center ">
							<div className="basis-1/2 items-center m-1">
								<p className="text-xl  font-mono tracking-tight text-slate-500 dark:text-white">
									{/* Owners Name */}
									Owned by{" "}
									{nft.owner == user.walletAdress
										? "you"
										: nft.owner}
								</p>
							</div>

							<div className="basis-1/2 mx-2 ">
								{/* Like Button */}
								<button
									onClick={() => {
										favourite
											? setFavorite(false)
											: setFavorite(true);
									}}
								>
									{favourite && <BsSuitHeart size={28} />}

									{!favourite && (
										<BsSuitHeartFill size={28} />
									)}
								</button>
							</div>
						</div>
						{/* If it is a bidding buy now should be bid now */}
						<div className="mx-2 mt-5 ">
							<p className="text-xl font-mono tracking-tight text-zinc-400 dark:text-white">
								{/* NFT Name */}
								{nft.price}
							</p>
						</div>
						<div className="flex flex-auto mx-2 mt-5 content-center ">
							<div className="basis-1/2 items-center m-1">
								{nft.owner == user.walletAdress ? (
									<></>
								) : (
									<button
										type="button"
										onClick={executebuyNFT}
										className="break-inside bg-green-600 rounded-full px-8 py-4 mb-4 w-full hover:bg-green-700 transition ease-in-out duration-150"
									>
										{buy && (
											<div>
												<BuyNowModal />
											</div>
										)}
										<div className="flex items-center justify-between flex-1">
											<span className="text-lg font-medium text-white">
												Buy Now
											</span>
										</div>
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
				<Accordion_ />
			</div>
		</div>
	);
};

export default Nft;
