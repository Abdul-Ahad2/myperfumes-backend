import mongoose from "mongoose";

const subscribedUserSchema = mongoose.Schema({
  email: String,
});

const subscribedUserModel = mongoose.model(
  "subscribed_user",
  subscribedUserSchema
);

export default subscribedUserModel;
