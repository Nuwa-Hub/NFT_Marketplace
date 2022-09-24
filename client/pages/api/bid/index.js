import Bid from "../../../models/Bid";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
	const { method } = req;

	//db connect()
	await connectDB();

	//get method for rendering data
	if (method === "GET") {
		try {
			const biddings = await Bid.find();
			res.status(200).json(biddings);
		} catch (err) {
			res.status(500).json(err);
		}
	}
	//for insert data
	if (method === "POST") {
		// console.log(req.body)
		try {
			const newBid = new Bid(req.body);
			const bid = await newBid.save();
			res.status(201).json(bid);
		} catch (err) {
			res.status(500).json(err);
		}
	}
}
