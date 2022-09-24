const mongoose = require("mongoose");

const RaffleSchema = new mongoose.Schema(
  {
 
    owner: { type: String, default:"" },
    nft: { type: String, default:"" },
    bid:{ type: Array , default:""},
    start_time:{ type: Array , default:""},
    ending_time:{type:Boolean,default:""},
    fixedValue:{type:String},
    access:{type:Boolean,default:true},

  },
  { timestamps: true }
);

module.exports = mongoose.model("Collection", RaffleSchema);