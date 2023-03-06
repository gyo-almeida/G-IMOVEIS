import { Router } from "express";
import {
  createCategoriesController,
  getPropertiesByCategorieController,
  getCategoriesController,
} from "../controllers/categories";
import { validateAdmin } from "../middlewares/validateAdmin";
import { validateCategoryName } from "../middlewares/validateCategoryName";
import { validateData } from "../middlewares/validateData";
import { validateToken } from "../middlewares/validateToken";
import { reqCategorySchema } from "../schemas/categories";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  validateToken,
  validateAdmin,
  validateData(reqCategorySchema),
  validateCategoryName,
  createCategoriesController
);
categoriesRoutes.get("", getCategoriesController);
categoriesRoutes.get("/:id/realEstate", getPropertiesByCategorieController);
