import cartModel from "../models/cartModel.js";

export const getCartItemsService = async (req) => {
  try {
    const cartItems = await cartModel.find({ user_id: req.query.userId });
    return { status: 200, data: cartItems };
  } catch (error) {
    return error;
  }
};

export const addCartItemService = async (
  user_id,
  src,
  title,
  price,
  productId
) => {
  try {
    const itemCheck = await cartModel.findOne({
      user_id: user_id,
      title: title,
    });
    if (itemCheck) {
      return { status: 200, data: "Item already exists in cart" };
    }
    const newItem = new cartModel({
      user_id: user_id,
      product_id: productId,
      title: title,
      price: price,
      quantity: 1,
      src: src,
    });
    await newItem.save();
    return { status: 200, data: "Added To Cart" };
  } catch (error) {
    return error;
  }
};

export const deleteCartItemService = async (userId, title) => {
  try {
    await cartModel.findOneAndDelete({
      user_id: userId,
      title: title,
    });
    return { status: 200, data: "Deleted From Cart" };
  } catch (error) {
    return error;
  }
};

export const addQuantityService = async (userId, title) => {
  try {
    await cartModel.findOneAndUpdate(
      { user_id: userId, title: title },
      { $inc: { quantity: 1 } }
    );
    return { status: 200, data: "Incremented Successfully" };
  } catch (error) {
    return error;
  }
};

export const subtractQuantityService = async (userId, title) => {
  try {
    await cartModel.findOneAndUpdate(
      { user_id: userId, title: title },
      { $inc: { quantity: -1 } }
    );
    const updatedQuantity = await cartModel.findOne({ title: title });
    if (updatedQuantity.quantity <= 0) {
      await cartModel.findOneAndUpdate(
        { user_id: userId, title: title },
        { $set: { quantity: 1 } }
      );
      return { status: 203, data: "Quantity cannot be less than 1" };
    }
    return { status: 200, data: "Decremented Successfully" };
  } catch (error) {
    return error;
  }
};
