import { placeOrderService } from "../services/orderServices.js";

export const placeOrderController = async (req, res) => {
  const {
    total_amount,
    user_id,
    customer_name,
    customer_email,
    shipping_city,
    shipping_address_1,
    shipping_address_2,
    shipping_house_no,
  } = req.body;

  if (
    !req.body ||
    !total_amount ||
    !user_id ||
    !customer_name ||
    !customer_email ||
    !shipping_city ||
    !shipping_address_1 ||
    !shipping_house_no
  ) {
    return res.status(200).json({ data: "Error in credentials" });
  }

  try {
    const { status, data } = await placeOrderService(
      total_amount,
      user_id,
      customer_name,
      customer_email,
      shipping_city,
      shipping_address_1,
      shipping_address_2,
      shipping_house_no
    );
    res.status(status).json({ data: data });
  } catch (error) {
    res.status(404).json({ data: "Error in Database. Try again later." });
  }
};
