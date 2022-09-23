const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    img: { type: String ,default:""},
    walletAdress: { type: String ,default:""},
    favoriteList:{ type: Array , default:""},
    access:{type:Boolean,default:true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
