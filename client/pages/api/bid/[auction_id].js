import Bid from "../../../models/Bid";
import connectDB from "../../../utils/connectDB";

// Find the bid by auction id
export default async function handler(req, res) {
	const { auction_id } = req.query;

	await connectDB();

	//get method for rendering data
	if (req.method === "GET") {
		try {
			const auction = await Bid.findById(auction_id);
			res.status(200).json(auction);
		} catch (err) {
			res.status(500).json(err);
		}
	}
}
