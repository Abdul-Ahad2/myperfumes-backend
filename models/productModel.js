import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: String,
  type: String,
  description: String,
  likes: Number,
  dislikes: Number,
  small_desc: String,
  price: Number,
  src: String,
});

const productModel = mongoose.model("product", productSchema);

export default productModel;
