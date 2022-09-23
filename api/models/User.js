const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, unique: true },
    fullname: { type: String, default: "" },
    password: { type: String, required: true },
    account: { type: String, required: true },
    img: { type: String, default: "" },
    isAdmin: {
      type: Boolean,
      default: false,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
