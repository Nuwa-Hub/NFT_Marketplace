const mongoose = require("mongoose");

const BidSchema = new mongoose.Schema(
  {
    auctionId: { type: String, required: true},
    bidder: { type: String, default:"" },
    value: { type: String, default:"" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Collection", BidSchema);