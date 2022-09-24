const mongoose = require("mongoose");

const NFTSchema = new mongoose.Schema(
	{
		owner: { type: String, default: "" },
		collectionId: { type: String, required: true },
		Img: { type: String, default: "" },
		description: { type: String, default: "" },
		access: { type: Boolean, default: true },
		mint: { type: Boolean, default: false },
		price: { type: String, default: "" },
	},
	{ timestamps: true }
);

export default mongoose.models.NFT || mongoose.model("NFT", NFTSchema);
