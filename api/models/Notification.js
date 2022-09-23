const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true},
    senderId: { type: String, default:"" },
    receiverId: { type: String, default:"" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);