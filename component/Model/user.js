import mongoose from "mongoose";
// const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter your name."],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      // validate: [validator.isEmail, "Enter your valid email"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models.User || mongoose.model("User", userSchema);
