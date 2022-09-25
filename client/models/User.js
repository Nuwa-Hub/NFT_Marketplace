const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, default: "Unnamed" },
    img: { type: String, default: "" },
    walletAdress: { type: String, required: true, unique: true },
    favoriteList: { type: Array, default: "" },
    access: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
