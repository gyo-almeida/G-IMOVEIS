import { Router } from "express";
import { createUserController } from "../controllers/users";

export const userRoutes: Router = Router();

userRoutes.post("", createUserController);
