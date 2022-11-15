const mongoose = require("mongoose");

const RaffleBidSchema = new mongoose.Schema(
	{
		raffleId: { type: String, required: true },
		bidder: { type: String, default: "" },

	},
	{ timestamps: true }
);
delete mongoose.models["RaffleBid"];
export default mongoose.models.RaffleBid || mongoose.model("RaffleBid", RaffleBidSchema);