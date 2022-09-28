import Image from "next/image";
import React, { useState } from "react";
const AuctionForm = () => {
	const [declining, setDeclining] = useState(0);
	const [highest, setHighest] = useState(0);
	return (
		<div>
			<div className="text-xl mx-2 font-mono tracking-tight text-bold dark:text-white">
				Price
			</div>
			<div className="flex flex-auto mx-2 mt-5 content-center ">
				<div className="basis-1/2 items-center mx-4 ">
					<div className="w-full h-20 flex justify-aroundr items-center transform   rounded-lg shadow-sm shadow-cyan-500/50">
						<div className="m-5">
							<Image
								src="/icon-192x192.png"
								alt="me"
								width="30"
								height="30"
							/>
						</div>

						<text className="text-xl ml-20 font-mono tracking-tight text-slate-500 dark:text-white">
							ETH
						</text>
					</div>
				</div>

				<div className="basis-1/2 items-center mx-4">
					<div className="w-full h-20 flex justify-center items-center rounded-lg shadow-sm shadow-cyan-500/50">
						<input
							className="w-full h-20  p-4 border-0"
							type="text"
							name="NFTName"
							placeholder="Amount"
						/>
					</div>
				</div>
			</div>

			<div className="text-xl mx-2 mt-5 font-mono tracking-tight text-bold dark:text-white">
				Method
			</div>
			<div className="flex w-full mx-2 mt-5 content-center ">
				<div class="group relative mx-4">
					<div className="w-full h-20 flex justify-center items-center rounded-lg shadow-sm shadow-cyan-500/50">
						<button class="w-full bg-white text-black px-6 h-10 rounded border-none ">
							Choose the method
						</button>
					</div>
					<nav
						tabindex="0"
						class="border border-2 bg-white invisible border-gray-800 rounded w-60 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1"
					>
						<ul class="py-1">
							<li>
								<div
									class="block px-4 py-2 hover:bg-gray-100"
									onClick={() => setDeclining(1)}
								>
									Sell with declining price
								</div>
							</li>
							<li>
								<div
									class="block px-4 py-2 hover:bg-gray-100"
									onClick={() => setHighest(1)}
								>
									Sell to highest bidder
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="text-xl mx-2 mt-5 font-mono tracking-tight text-bold dark:text-white">
				Duration
			</div>

			<div className="flex flex-auto mx-2 mt-5 content-center ">
				<div className="basis-1/2 items-center mx-4">
					<div className="w-full h-20 flex justify-center items-center rounded-lg shadow-sm shadow-cyan-500/50">
						<input
							className="w-full h-20  p-4 border-0"
							type="date"
							name="start-date"
							placeholder="Start Date"
						/>
					</div>
				</div>

				<div className="basis-1/2 items-center mx-4">
					<div className="w-full h-20 flex justify-center items-center rounded-lg shadow-sm shadow-cyan-500/50">
						<input
							className="w-full h-20  p-4 border-0"
							type="date"
							name="end-date"
							placeholder="End Date"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuctionForm;
