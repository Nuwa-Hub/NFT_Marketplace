import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNFTByNftId } from "redux/actions/NFTAction";

const Nft = () => {
	const router = useRouter();
	const nft_id = router.query.id;
	const dispatch = useDispatch();
	const nft = useSelector((state) => state.NFT.NFTs);
	console.log(nft);

	useEffect(() => {
		getNFTByNftId(dispatch, nft_id);
	}, [dispatch, nft_id]);
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
							<text className=" text-2xl font-bold font-mono tracking-tight text-gray-900 dark:text-white">
								{/* Collection Name */}
								Cryptopuppies
							</text>
						</div>

						<div className="mx-2 mt-5 ">
							<text className="text-5xl font-bold font-mono tracking-tight text-gray-900 dark:text-white">
								{/* NFT Name */}
								{nft.NFTName}
							</text>
						</div>

						<div className="flex flex-auto mx-2 mt-5 content-center ">
							<div className="basis-1/2 items-center m-1">
								<text className="text-xl  font-mono tracking-tight text-slate-500 dark:text-white">
									{/* Owners Name */}
									Owned by @0x123456789
								</text>
							</div>

							<div className="basis-1/2 mx-2 ">
								{/* Like Button */}
								{!true && <BsSuitHeartFill size={28} />}
								{true && <BsSuitHeart size={28} />}
							</div>
						</div>
						{/* If it is a bidding buy now should be bid now */}
						<div className="mx-2 mt-5 ">
							<text className="text-xl font-mono tracking-tight text-zinc-400 dark:text-white">
								{/* NFT Name */}
								{nft.price}
							</text>
						</div>
						<div className="flex flex-auto mx-2 mt-5 content-center ">
							<div className="basis-1/2 items-center m-1">
								<button
									type="button"
									className="break-inside bg-green-600 rounded-full px-8 py-4 mb-4 w-full hover:bg-green-700 transition ease-in-out duration-150"
								>
									<div className="flex items-center justify-between flex-1">
										<span className="text-lg font-medium text-white">
											Buy Now
										</span>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* <Accordion_ /> */}
			</div>
		</div>
	);
};

export default Nft;
