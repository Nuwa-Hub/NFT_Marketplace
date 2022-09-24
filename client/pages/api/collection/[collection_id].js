import Collection from "../../../models/Collection";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
	const { collection_id } = req.query;

	await connectDB();

	//get method for rendering data
	if (req.method === "GET") {
		try {
			const collection = await Collection.findById(collection_id);
			res.status(200).json(collection);
		} catch (err) {
			res.status(500).json(err);
		}
	}
}
