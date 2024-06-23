import productModel from "../models/productModel.js";
import {
  deleteCartItemService,
  getCartItemsService,
  addCartItemService,
  subtractQuantityService,
  addQuantityService,
} from "../services/cartServices.js";

export const getCartItemsController = async (req, res) => {
  try {
    const { status, data } = await getCartItemsService(req);

    res.status(status).json({ data: data });
  } catch (error) {
    res.status(404).json({ data: "Database Problem. Please try again later." });
  }
};

export const addCartItemController = async (req, res) => {
  const { user_id, src, title, price } = req.body;

  if (!req.body || !user_id || !src || !title || !price) {
    return res.status(200).json({ data: "Please Sign in" });
  }

  try {
    const product = await productModel.find({ title: title });
    const productId = product.map((val) => val._id);
    const { status, data } = await addCartItemService(
      user_id,
      src,
      title,
      price,
      productId
    );
    res.status(status).json({ data: data });
  } catch (error) {
    res.status(404).json({ data: "Database Problem. Please try again later." });
  }
};

export const deleteCartItemController = async (req, res) => {
  console.log(req.params);
  const { title, userId } = req.params;
  if (!req.body || !userId || !title) {
    return res.status(200).json({ data: "Please Sign in" });
  }

  try {
    const { status, data } = await deleteCartItemService(userId, title);
    res.status(status).json({ data: data });
  } catch (error) {
    res.status(404).json({ data: "Database Problem. Please try again later." });
  }
};
export const addQuantityController = async (req, res) => {
  const { title, userId } = req.body;
  try {
    const { status, data } = await addQuantityService(userId, title);
    res.status(status).json({ data: data });
  } catch (error) {
    res.status(404).json({ data: "Database Problem. Please try again later." });
  }
};
export const subtractQuantityController = async (req, res) => {
  const { title, userId } = req.body;
  if (!req.body || !userId || !title) {
    return res.status(200).json({ data: "Please Sign in" });
  }
  try {
    const { status, data } = await subtractQuantityService(userId, title);
    res.status(status).json({ data: data });
  } catch (error) {
    res.status(404).json({ data: "Database Problem. Please try again later." });
  }
};
