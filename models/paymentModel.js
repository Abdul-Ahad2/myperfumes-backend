import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  payment_date: {
    type: Date,
    default: () => {
      const date = new Date();
      date.setDate(date.getDate() + 3);
      return date;
    },
  },
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

const paymentModel = mongoose.model("payment", paymentSchema);

export default paymentModel;
