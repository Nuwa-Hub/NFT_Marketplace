import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
	const { useState } = React;
	const [selectedFile, setSelectedFile] = useState();
	const [checkFile, setCheckFile] = useState(false);

	const imageHandler = (e) => {
		setSelectedFile(e.target.files[0]);
		setCheckFile(true);
	};

	const imagesubmission = () => {
		if (checkFile) {
			alert("File Uploaded");
			console.log(selectedFile);
		} else {
			alert("select a file");
		}
	};
	return (
		<div>
			<h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
				Create New NFT
			</h3>
			<div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
				<form>
					<div class="form-group mb-6">
						<input
							type="text"
							class="form-control block
									w-full
									px-3
									py-1.5
									text-base
									font-normal
									text-gray-700
									bg-white bg-clip-padding
									border border-solid border-gray-300
									rounded
									transition
									ease-in-out
									m-0
									focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="exampleInput7"
							placeholder="NFT name"
						/>
					</div>
					<div class="form-group mb-6">
						<input
							type="email"
							class="form-control block
									w-full
									px-3
									py-1.5
									text-base
									font-normal
									text-gray-700
									bg-white bg-clip-padding
									border border-solid border-gray-300
									rounded
									transition
									ease-in-out
									m-0
									focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="exampleInput8"
							placeholder="Collection for NFT"
						/>
					</div>
					<div class="form-group mb-6">
						<textarea
							class="
									form-control
									block
									w-full
									px-3
									py-1.5
									text-base
									font-normal
									text-gray-700
									bg-white bg-clip-padding
									border border-solid border-gray-300
									rounded
									transition
									ease-in-out
									m-0
									focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
								"
							id="exampleFormControlTextarea13"
							rows="3"
							placeholder="Description"
						></textarea>
					</div>

					<div className="w-[320px] grid gap-2">
						<div className="h-24 cursor-pointer relative flex justify-center items-center border-2 rounded-md bg-gray-200">
							<input
								type="file"
								name="file"
								onChange={imageHandler}
								className="z-20 opacity-0 cursor-pointer h-full w-full"
							/>
							<div className="absolute flex justify-center items-center gap-2">
								<img
									className={`h-10 w-10 rounded-full ${
										checkFile ? "opacity-1" : "opacity-0"
									}`}
									src={
										selectedFile
											? URL.createObjectURL(selectedFile)
											: null
									}
								/>
								<span className="text-[18px] w-56 truncate">
									{checkFile
										? selectedFile.name
										: "choose a file"}
								</span>
							</div>
						</div>
					</div>

					<button
						onClick={imagesubmission}
						type="submit"
						class="
							w-full
							px-6
							py-2.5
							bg-blue-600
							text-white
							font-medium
							text-xs
							leading-tight
							uppercase
							rounded
							shadow-md
							hover:bg-blue-700 hover:shadow-lg
							focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
							active:bg-blue-800 active:shadow-lg
							transition
							duration-150
							ease-in-out"
					>
						Create
					</button>
				</form>
			</div>
		</div>

	);
}
