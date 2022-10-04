const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema(
  {
    owner: { type: String, default: "" },
    collectionName: { type: String, required: true},
    bannerImg: { type: String, default:"" },
    profileImg: { type: String, default:"" },
    description:{ type: String , default:""},
    nfts:{ type: Array , default:""},
    access:{type:Boolean,default:true},
  },
  { timestamps: true }
);

//module.exports = mongoose.model("Collection", CollectionSchema);
//delete mongoose.models["Collection"];
export default mongoose.models.Collection || mongoose.model("Collection", CollectionSchema);