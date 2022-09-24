import NFT from "../../../models/NFT";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
	const { nft_id } = req.query;

	await connectDB();

	//get method for rendering data
	if (req.method === "GET") {
		try {
			const nft = await NFT.findById(nft_id);
			res.status(200).json(nft);
		} catch (err) {
			res.status(500).json(err);
		}
	}
}
