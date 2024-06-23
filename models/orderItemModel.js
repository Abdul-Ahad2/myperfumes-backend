import mongoose from "mongoose";

const orderItemSchema = mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "order",
    required: true,
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
});

const orderItemModel = mongoose.model("orderItem", orderItemSchema);
export default orderItemModel;
