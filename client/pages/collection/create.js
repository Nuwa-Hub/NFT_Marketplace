import React from "react";
import { IPFSInput, Input, Select, TextArea } from "web3uikit";

const createcollection = () => {
	return (
		<div className="m-12">
			<section className="bg-cream-lighter p-6 shadow">
				<div className="md:flex p-4">
					<h2 className="justify-center uppercase text-4xl font-bold font-mono tracking-tight text-gray-900">
						Create New Collection
					</h2>
				</div>
				<form>
					<div className="md:flex mb-8 mt-5 p-4">
						<div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
							<div className="mb-4">
								<label className="block uppercase text-xl font-bold font-mono p-2">
									Collection Name
								</label>
								<input
									className="w-full shadow-inner p-4 border-0"
									type="text"
									name="name"
									placeholder="Ex: CryptoPuppies"
								/>
							</div>
							<div className="mb-4">
								<label className="block uppercase text-xl font-bold font-mono p-2">
									Item Count
								</label>
								<input
									className="w-full shadow-inner p-4 border-0"
									type="text"
									name="name"
									placeholder="Ex: 1.1K"
								/>
							</div>
							<div className="mb-4">
								<label className="block uppercase text-xl font-bold font-mono p-2">
									Description
								</label>
								<textarea
									className="w-full shadow-inner p-4 border-0"
									type="text"
									name="address_street"
									placeholder="Welcome to the home of Helions on OpenSea. Discover the best items in this collection."
								/>
							</div>
							<div className="mb-4">
								<legend className="block uppercase text-xl font-bold font-mono p-2">
									Cover Image
								</legend>

								<div className="button bg-gold hover:bg-gold-dark text-cream mx-auto cusor-pointer relative mt-4">
									<label className="flex justify-center w-full max-w-xs h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-lg appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
										<span className="flex items-center space-x-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-6 h-6 text-gray-600"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
												/>
											</svg>
											<span className="font-medium text-gray-600">
												Drop files to Attach, or
												<span className="text-blue-600 underline">
													browse
												</span>
											</span>
										</span>
										<input
											type="file"
											name="file_upload"
											className="hidden"
										/>
									</label>
								</div>
							</div>
							<div className="mb-4">
								<legend className="block uppercase text-xl font-bold font-mono p-2">
									Collection Profile Image
								</legend>

								<div className="button bg-gold hover:bg-gold-dark text-cream mx-auto cusor-pointer relative mt-4">
									<label className="flex justify-center w-full max-w-xs h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-lg appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
										<span className="flex items-center space-x-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-6 h-6 text-gray-600"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
												/>
											</svg>
											<span className="font-medium text-gray-600">
												Drop files to Attach, or
												<span className="text-blue-600 underline">
													browse
												</span>
											</span>
										</span>
										<input
											type="file"
											name="file_upload"
											className="hidden"
										/>
									</label>
								</div>
							</div>
							<button
								type="button"
								className="inline-block px-7 py-4 mt-5 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								Submit
							</button>
						</div>
					</div>
				</form>
			</section>
		</div>
	);
};

export default createcollection;
