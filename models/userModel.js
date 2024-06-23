import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    id: false,
  }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
