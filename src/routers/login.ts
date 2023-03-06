import { Router } from "express";
import { createLoginController } from "../controllers/login";
import { validateData } from "../middlewares/validateData";
import { loginReqSchema } from "../schemas/login";

export const loginRoute: Router = Router();

loginRoute.post("", validateData(loginReqSchema), createLoginController);
