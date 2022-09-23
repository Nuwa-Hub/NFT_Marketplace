const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    fullname: { type: String , default:""},
    address: { type: String, required: true },
    telNo: { type: String, required: true },
    img: { type: String ,default:""},
    birthday: {
      type: Date,
      min: '1900-09-28',
      max: '2030-05-23'
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
