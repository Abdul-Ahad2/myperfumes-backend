import express from "express";
import bodyParser from "body-parser";
import "dotenv/config.js";
import cors from "cors";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRouter.js";
import userRouter from "./routes/userRouter.js";
import connectDB from "./config/connectDB.js";
import orderRouter from "./routes/orderRouter.js";

const app = express();
const port = process.env.PORT;
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
