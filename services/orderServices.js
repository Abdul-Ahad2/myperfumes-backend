import orderModel from "../models/orderModel.js";
import orderItemModel from "../models/orderItemModel.js";
import paymentModel from "../models/paymentModel.js";
import cartModel from "../models/cartModel.js";
import nodemailer from "nodemailer";

export const placeOrderService = async (
  total_amount,
  user_id,
  customer_name,
  customer_email,
  shipping_city,
  shipping_address_1,
  shipping_address_2,
  shipping_house_no
) => {
  try {
    const cartItems = await cartModel.find({ user_id: user_id });
    if (cartItems.length === 0) {
      return { status: 300, data: "Cart is empty" };
    }
    const newOrder = new orderModel({
      user_id: user_id,
      total_amount: total_amount,
      status: "Pending",
      customer_name,
      customer_email,
      shipping_city,
      shipping_address_1,
      shipping_address_2,
      shipping_house_no,
    });
    await newOrder.save();

    const orderItems = cartItems.map((item) => ({
      quantity: item.quantity,
      price: item.price,
      order_id: newOrder._id,
      product_id: item.product_id,
    }));

    await orderItemModel.insertMany(orderItems);
    await cartModel.deleteMany({ user_id: user_id });

    const newPayment = new paymentModel({
      amount: total_amount,
      order_id: newOrder._id,
    });
    await newPayment.save();

    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: customer_email,
      subject: "Order Confirmation",
      text: `Dear ${customer_name},\n\nThank you for your order. Your order ID is ${newOrder._id}. We'll further let you know about your order.\n\nBest regards,\nMyPerfumes`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Email error: ", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    return { status: 200, data: "Order Placed!" };
  } catch (error) {
    return { status: 400, data: "Error in placing order. Try again later." };
  }
};
