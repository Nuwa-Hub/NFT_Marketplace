import Collection from "models/Collection";
import connectDB from "utils/connectDB";

export default async function handler(req, res) {
	const { owner } = req.query;

	await connectDB();

	//get method for rendering data
	if (req.method === "GET") {
		try {
			const collection = await Collection.find({owner:req.query.owner});
			res.status(200).json(collection);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	if (req.method === "PUT") {
		try {
			const updateCollection = await Collection.findByIdAndUpdate(
				req.params.id,
				{ $set: req.body },
				{ new: true }
			);
			res.status(200).json(updateCollection);
		} catch (err) {
			console.log("err")
			res.status(500).json(err);
		}
	}

	if (req.method === "DELETE") {
		try {
			const deleteCollection = await Collection.findByIdAndDelete(req.params.id);
			res.status(200).json(deleteCollection);
		} catch (err) {
			console.log("err")
			res.status(500).json(err);
		}
	}

}
