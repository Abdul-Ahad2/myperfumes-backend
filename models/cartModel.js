import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  user_id: String,
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  title: String,
  price: Number,
  quantity: Number,
  src: String,
});

const cartModel = mongoose.model("cart", cartSchema);

export default cartModel;
