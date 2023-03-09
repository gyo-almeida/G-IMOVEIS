import { Router } from "express";
import {
  createRealEstateController,
  getRealEstateController,
} from "../controllers/realEstate";
import { validateAddress } from "../middlewares/validateAddress";
import { validateToken } from "../middlewares/validateToken";

export const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  validateToken,
  validateAddress,
  createRealEstateController
);
realEstateRoutes.get("", getRealEstateController);
