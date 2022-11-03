const mongoose = require("mongoose");

const AuctionSchema = new mongoose.Schema(
	{
		owner: { type: String, default: "" },
		nft: { type: String, default: "" },
		bid: { type: Array, default: "" },
		startDate: { type: String, default: "" },
		endDate: { type: String, default: "" },
		auctionType: { type: String },
		startingPrice: { type: String },
		endingPrice: { type: String },
		isCompleted: { type: Boolean, default: false },
		access: { type: Boolean, default: true },
	},
	{ timestamps: true }
);
delete mongoose.models["Auction"];
export default mongoose.models.Auction ||
	mongoose.model("Auction", AuctionSchema);
