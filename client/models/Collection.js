const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema(
  {
    collectionName: { type: String, required: true},
    bannerImg: { type: String, default:"" },
    profileImg: { type: String, default:"" },
    description:{ type: String , default:""},
    nfts:{ type: Array , default:""},
    access:{type:Boolean,default:true},
  },
  { timestamps: true }
);
console.log(mongoose.models.Collection)
//module.exports = mongoose.model("Collection", CollectionSchema);
export default mongoose.models.Collection || mongoose.model("Collection", CollectionSchema);