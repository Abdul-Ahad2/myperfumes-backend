import express from "express";
import {
  deleteCartItemController,
  getCartItemsController,
  addCartItemController,
  addQuantityController,
  subtractQuantityController,
} from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.get("/getCartItems", getCartItemsController);
cartRouter.post("/addCartItem", addCartItemController);
cartRouter.delete("/deleteCartItem/:title/:userId", deleteCartItemController);
cartRouter.put("/addQuantity", addQuantityController);
cartRouter.put("/subtractQuantity", subtractQuantityController);

export default cartRouter;
