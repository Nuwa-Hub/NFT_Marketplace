import Auction from "../../../models/Auction";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
	const { auction_id } = req.query;

	await connectDB();

	//get method for rendering data
	if (req.method === "GET") {
		try {
			const auction = await Auction.findById(auction_id);
			res.status(200).json(auction);
		} catch (err) {
			res.status(500).json(err);
		}
	}
}
