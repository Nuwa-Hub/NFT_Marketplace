const CollectionHeader = () => {
	return (
		<div>
			<div className="relative">
				<img
					src="/pex.jpg" // cover image
					className="w-full h-48 md:h-80"
					alt="Image alt text"
				/>
				<img
					src="/dog.jpg" // profile image
					className="absolute inset-y-28 left-16 md:inset-y-52  md:bottom-32 bg-purple-300 rounded-full h-36 w-36 md:h-56 md:w-56 "
				>
					{/* <img src="/im.jpg" class="object-cover" alt="Image alt text" /> */}
				</img>
			</div>

			<div className="flex flex-col items-start justify-center mt-20 ml-6 md:mt-36">
				<h1 className="text-2xl font-bold text-gray-900">
					Collection 1
				</h1>
				<p className="text-gray-500">by collection owner</p>
				<p className="text-gray-500">
					The photographs describes the fight of young souls seeking
					escape from old rituals in order to build their own story
					and future.
				</p>
			</div>
		</div>
	);
};

export default CollectionHeader;
