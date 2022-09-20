export default function NFTCard() {
	return (
		<section className="overflow-hidden text-gray-700 ">
			<div className="container px-2 py-2 mx-auto lg:pt-12 lg:px-2">
				<div className="flex flex-wrap -m-1 md:-m-2">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
						<div
							key={item}
							className="flex flex-wrap w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 "
						>
							<div className="group max-w-sm  m-4 bg-zinc-200 rounded-lg border border-gray-200 hover:shadow-lg transition ease-in-out  hover:-translate-y-1 hover:scale-110 ">
								<a href="#">
									<div className="w-full aspect-square ">
										<img
											alt="gallery"
											className="block object-cover object-center w-full h-full rounded-lg"
											src="/umbrella.jpg"
										/>
									</div>
								</a>
								<div className="px-5 pt-2">
									<a href="#">
										<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
											NFT Name
										</h5>
									</a>
									<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
										price
									</p>
								</div>
								<a href="#">
									<button
										type="button"
										className="hidden flex h-10 bg-gradient-to-r from-indigo-800 via-green-500 to-teal-200  w-full rounded-none group-hover:block"
									>
										Buy Now
									</button>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
