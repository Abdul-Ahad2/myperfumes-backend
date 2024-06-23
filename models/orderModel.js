import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  order_date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  total_amount: {
    type: Number,
    required: true,
  },
  customer_name: {
    type: String,
    required: true,
  },
  customer_email: {
    type: String,
    required: true,
  },
  shipping_city: {
    type: String,
    required: true,
  },
  shipping_address_1: {
    type: String,
    required: true,
  },
  shipping_address_2: {
    type: String,
    default: null,
  },
  shipping_house_no: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Pending",
  },
});

const orderModel = mongoose.model("order", orderSchema);
export default orderModel;
