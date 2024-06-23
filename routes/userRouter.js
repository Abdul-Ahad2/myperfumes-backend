import express from "express";
import {
  subscribedUserController,
  createUserController,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/subscribeUser", subscribedUserController);
userRouter.post("/createUser", createUserController);

export default userRouter;
