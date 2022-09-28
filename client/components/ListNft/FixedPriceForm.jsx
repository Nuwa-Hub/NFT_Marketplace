import Image from "next/image";

const FixedPriceForm = () => {
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

			<div className="flex flex-auto mx-2 mt-5 content-center "></div>
		</div>
	);
};

export default FixedPriceForm;
