import { Router } from "express";
import {
  createUserController,
  getUsersController,
  updateUserController,
} from "../controllers/users";
import { validateData } from "../middlewares/validateData";
import { validateEmail } from "../middlewares/validateEmail";
import { validateUser } from "../middlewares/validateUser";

import { updateUserSchema, userReqSchema } from "../schemas/user";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  validateData(userReqSchema),
  validateEmail,
  createUserController
);
userRoutes.get("", getUsersController);
userRoutes.patch(
  "/:id",
  validateUser,
  validateData(updateUserSchema),
  updateUserController
);
