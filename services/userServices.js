import subscribedUserModel from "../models/subscribedUserModel.js";
import userModel from "../models/userModel.js";

export const subscribedUserService = async (email) => {
  try {
    const user = await subscribedUserModel.findOne({ email: email });
    if (user) {
      return { status: 200, data: "User already subscribed" };
    }
    const addSubscribedUser = new subscribedUserModel({
      email: email,
    });
    await addSubscribedUser.save();
    return { status: 200, data: "User subscribed successfully" };
  } catch (error) {
    return error;
  }
};

export const createUserService = async (_id, username, email) => {
  try {
    const user = await userModel.findOne({ _id: _id });
    if (user) {
      return { status: 200, data: "Signed in" };
    }
    const newUser = new userModel({
      _id: _id,
      username: username,
      email: email,
    });

    await newUser.save();
    return { status: 200, data: "User created successfully" };
  } catch (error) {
    return error;
  }
};
