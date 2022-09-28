const ListingType = () => {
	return (
		<div>
			<div className="flex flex-auto mx-2 mt-5 content-center ">
				<div className="basis-1/2 items-center m-4 ">
					<div className=" w-full h-20 flex justify-center items-center transform hover:scale-110 hover:bg-green-50 duration-500 ease-in-out rounded-lg shadow-md shadow-cyan-500/50">
						<text className="text-xl font-mono tracking-tight text-slate-500 dark:text-white">
							Fixed Price
						</text>
					</div>
				</div>

				<div className="basis-1/2 items-center m-4">
					<div className="w-full h-20 flex justify-center items-center transform hover:scale-110 hover:bg-green-50 duration-500 ease-in-out rounded-lg shadow-md shadow-cyan-500/50">
						<text className="text-xl  font-mono tracking-tight text-slate-500 dark:text-white">
							Timed Auction
						</text>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListingType;
