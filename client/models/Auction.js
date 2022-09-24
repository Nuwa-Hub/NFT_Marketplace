const mongoose = require("mongoose");

const AuctionSchema = new mongoose.Schema(
	{
		owner: { type: String, default: "" },
		nft: { type: String, default: "" },
		bid: { type: Array, default: "" },
		start_time: { type: String, default: "" },
		ending_time: { type: String, default: "" },
		auctionType: { type: String },
		price: { type: String },
		access: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

export default mongoose.models.Auction ||
	mongoose.model("Auction", AuctionSchema);
