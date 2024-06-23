import express from "express";
import {
  getCoachesController,
  getLocalsController,
  getMusksController,
  getScentsController,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/getMusks", getMusksController);
productRouter.get("/getLocals", getLocalsController);
productRouter.get("/getScents", getScentsController);
productRouter.get("/getCoaches", getCoachesController);

export default productRouter;
