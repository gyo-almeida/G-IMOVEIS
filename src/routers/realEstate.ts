import { Router } from "express";
import {
  createRealEstateController,
  getRealEstateController,
} from "../controllers/realEstate";
import { validateAddress } from "../middlewares/validateAddress";
import { validateAdmin } from "../middlewares/validateAdmin";
import { validateData } from "../middlewares/validateData";
import { validateToken } from "../middlewares/validateToken";
import { reqRealEstateSchema } from "../schemas/realEstate";

export const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  validateToken,
  validateAdmin,
  validateData(reqRealEstateSchema),
  validateAddress,
  createRealEstateController
);
realEstateRoutes.get("", getRealEstateController);
