import { Router } from "express";
import {
  createSchedulesController,
  getScheduleByRealEstateController,
} from "../controllers/schedules";
import { validateAdmin } from "../middlewares/validateAdmin";
import { validateData } from "../middlewares/validateData";
import { validateToken } from "../middlewares/validateToken";
import { reqScheduleSchema } from "../schemas/schedules";

export const scheduleRoutes: Router = Router();

scheduleRoutes.post("", validateToken, createSchedulesController);
scheduleRoutes.get(
  "/realEstate/:id",
  validateToken,
  validateAdmin,
  getScheduleByRealEstateController
);
