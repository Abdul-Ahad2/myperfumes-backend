import express from "express";
import { placeOrderController } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/placeOrder", placeOrderController);

export default orderRouter;
