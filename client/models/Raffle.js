const mongoose = require("mongoose");

const RaffleSchema = new mongoose.Schema(
  {
    owner: { type: String, default: "" },
    nft: { type: String, default: "" },
    bid: { type: Array, default: "" },
    endDate: { type: mongoose.Schema.Types.Date, default: "" },
    startDate: { type: mongoose.Schema.Types.Date, default: "" },
    fixedValue: { type: Number },
    isCompleted: { type: Boolean, default: false },
    access: { type: Boolean, default: true },
    winner: { type: String, default: "" },
  },
  { timestamps: true }
);
delete mongoose.models["Raffle"];
module.exports = mongoose.model("Raffle", RaffleSchema);
