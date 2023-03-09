import { Request, Response } from "express";
import { iReqCategory } from "../interfaces/categories";
import { iLoginReq } from "../interfaces/login";
import { createCategory } from "../services/categories/create";
import { getCategories } from "../services/categories/getCategories";
import { getRealEstateByCategoryService } from "../services/categories/getRealEstateByCategories";
import { createLogin } from "../services/login/login";

export async function createCategoriesController(
  req: Request,
  resp: Response
): Promise<Response> {
  const categoryData: iReqCategory = req.body;

  const category = await createCategory(categoryData);

  return resp.status(201).json(category);
}

export async function getPropertiesByCategorieController(
  req: Request,
  resp: Response
): Promise<Response> {
  const idData = Number(req.params.id);

  const realEstatesByCategory = await getRealEstateByCategoryService(idData);

  return resp.json(realEstatesByCategory);
}

export async function getCategoriesController(
  req: Request,
  resp: Response
): Promise<Response> {
  const categories = await getCategories();

  return resp.json(categories);
}
