import {
  subscribedUserService,
  createUserService,
} from "../services/userServices.js";

export const subscribedUserController = async (req, res) => {
  const { email } = req.body;
  if (!req.body || !email) {
    res.status(300).json({ data: "Please enter an email address" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ data: "Please enter a valid email address" });
  }
  try {
    const { status, data } = await subscribedUserService(email);
    res.status(status).json({ data: data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Database Problem. Please try again later." });
  }
};

export const createUserController = async (req, res) => {
  const { _id, username, email } = req.body;
  if (!req.body || !email || !_id || !username) {
    res.status(300).json({ data: "Please provide all credentials" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ data: "Please enter a valid email address" });
  }

  try {
    const { status, data } = await createUserService(_id, username, email);
    res.status(status).json({ data: data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Database Problem. Please try again later." });
  }
};
