import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUsersController,
  updateUserController,
} from "../controllers/users";
import { validateAdmin } from "../middlewares/validateAdmin";
import { validateData } from "../middlewares/validateData";
import { validateEmail } from "../middlewares/validateEmail";
import { validateID } from "../middlewares/validateID";
import { validateToken } from "../middlewares/validateToken";
import { validateUser } from "../middlewares/validateUser";

import { updateUserSchema, userReqSchema } from "../schemas/user";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  validateData(userReqSchema),
  validateEmail,
  createUserController
);
userRoutes.get("", validateToken, validateAdmin, getUsersController);
userRoutes.patch(
  "/:id",
  validateUser,
  validateData(updateUserSchema),
  validateToken,
  updateUserController
);
userRoutes.delete(
  "/:id",
  validateToken,
  validateUser,
  validateAdmin,
  deleteUserController
);
