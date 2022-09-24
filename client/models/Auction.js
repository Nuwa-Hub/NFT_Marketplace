const mongoose = require("mongoose");

const AuctionSchema = new mongoose.Schema(
  {
   
    owner: { type: String, default:"" },
    nft: { type: String, default:"" },
    bid:{ type: Array , default:""},
    start_time:{ type: Array , default:""},
    ending_time:{type:Boolean,default:""},
    auctionType:{type:String},
    price:{type:String},
    access:{type:Boolean,default:true},

  },
  { timestamps: true }
);

module.exports = mongoose.model("Collection", AuctionSchema);