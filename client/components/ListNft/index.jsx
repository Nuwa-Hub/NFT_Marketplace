import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import AuctionForm from "./AuctionForm";
import FixedPriceForm from "./FixedPriceForm";
import ListingType from "./ListingType";
import React, { useState } from "react";
const Listing = () => {
	const [fixed, setFixed] = useState(1);
	const [timed, setTimed] = useState(0);
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
										src="/dog.jpg"
									/>
								</div>
							</a>
						</div>
					</div>
					<div className="col-span-2 m-4">
						<div className="mb-2 mx-2">
							<text className=" text-2xl font-bold font-mono tracking-tight text-gray-900 dark:text-white">
								{/* Collection Name */}
								List Item For Sale
							</text>
						</div>

						<div className="mx-2 mt-5 ">
							<ListingType
								setFixed={setFixed}
								setTimed={setTimed}
							/>
						</div>
						{fixed && (
							<div className="mx-2 mt-5 ">
								<AuctionForm />
							</div>
						)}

						{timed && (
							<div className="mx-2 mt-5 ">
								<FixedPriceForm />
							</div>
						)}

						<div className="flex flex-auto mx-2 mt-5 content-center ">
							<div className="basis-1/2 items-center m-1">
								<button
									type="button"
									className="break-inside bg-green-600 rounded-full px-8 py-4 mb-4 w-full hover:bg-green-700 transition ease-in-out duration-150"
								>
									<div className="flex items-center justify-between flex-1">
										<span className="text-lg font-medium text-white">
											Complete Listing
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

export default Listing;
