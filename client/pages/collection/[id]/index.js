import CollectionHeader from "components/collection/CollectionHeader";
import NFTCard from "components/collection/NFTCard";

const Collection = () => {
	return (
		<div>
			<CollectionHeader />
			<NFTCard />
			{/* <CollectionInfo /> */}
		</div>
	);
};

export default Collection;

// const CollectionHeader = () => {
// 	return (
// 		<div>
// 			<img
// 				src="/pex.jpg" // cover image
// 				class="w-full h-48 md:h-80"
// 				alt="Image alt text"
// 			/>
// 			<img
// 				src="/dog.jpg" // profile image
// 				class="relative left-12 bottom-20 md:bottom-32 bg-purple-300 rounded-full h-36 w-36 md:h-56 md:w-56 "
// 			>
// 				{/* <img src="/im.jpg" class="object-cover" alt="Image alt text" /> */}
// 			</img>
// 		</div>
// 	);
// };

// export default CollectionHeader;
