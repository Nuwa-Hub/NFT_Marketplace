const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema(
  {
    collectionName: { type: String, required: true},
    bannerImg: { type: String, default:"" },
    profileImg: { type: String, default:"" },
    description:{ type: String , default:""},
    :{ type: String , default:""},
    projectId:{ type: String , default:""},
    projectName:{ type: String, default:"" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);