import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import Accordion_ from "./Accordion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { publicRequest, userRequest } from "utils/requestMethods";
import { list } from "firebase/storage";


const Nft = () => {
	//get current NFT id
	const router = useRouter();
	const nft_id = router.query.id;

	//get current user
	const user = useSelector((state) => state.user);

	//get relevent nft by NFT array
	const nfts = useSelector((state) => state.NFT.NFTs);
	const collections = useSelector((state) => state.collection.collections);
	const nft = nfts.find((item) => item._id == nft_id);
	const [listing, setListing] = useState(null);
	useEffect(() => {
		if (nft) {
			document.title = nft.NFTName;
			publicRequest.get(`listing/${nft_id}`).then((res) => {
				console.log(res);
				setListing(res.data);
			}).catch((err) => {
				console.log(err);
			});
		}
	}, [nft]);
	if (!nft) {
		return <p>not found</p>
	}
	const collection = collections.find((item) => item._id == nft.collectionId);
	// console.log(collection);
	// console.log(user);
	console.log(user.currentUser.walletAdress, nft.owner);

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
								{collection.collectionName}
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
									Owned by {nft.owner}
								</p>
							</div>

							<div className="basis-1/2 mx-2 ">
								{/* Like Button */}
								{!true && <BsSuitHeartFill size={28} />}
								{true && <BsSuitHeart size={28} />}
							</div>
						</div>
						{/* If it is a bidding buy now should be bid now */}
						<div className="mx-2 mt-5 ">
							<p className="text-xl font-mono tracking-tight text-zinc-400 dark:text-white">
								{/* NFT Name */}
								{nft.price}
							</p>
						</div>
						{user.currentUser.walletAdress == nft.owner ?
							<div className="flex flex-auto mx-2 mt-5 content-center ">
								<div className="basis-1/2 items-center m-1">
									<button
										type="button"
										className="break-inside bg-green-600 rounded-full px-8 py-4 mb-4 w-full hover:bg-green-700 transition ease-in-out duration-150"
									>
										<Link href={`/nft/${nft_id}/list`} className="flex items-center justify-between flex-1">
											<a className="text-lg font-medium text-white">
												List Now
											</a>
										</Link>
									</button>
								</div>
							</div> :
							listing == null ? null :
								<div className="flex flex-auto mx-2 mt-5 content-center ">
									<div className="basis-1/2 items-center m-1">
										<button
											type="button"
											className="break-inside bg-green-600 rounded-full px-8 py-4 mb-4 w-full hover:bg-green-700 transition ease-in-out duration-150"
										>
											<div className="flex items-center justify-between flex-1">
												<span className="text-lg font-medium text-white">
													Buy Now for {listing?.price} ETH
												</span>
											</div>
										</button>
									</div>
								</div>}
					</div>
				</div>
				<Accordion_ />
			</div>
		</div>
	);
};

export default Nft;
