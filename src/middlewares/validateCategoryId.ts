import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../errors";

export const validateCategoryId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idCategory = Number(req.params.id);

  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findById = await categoriesRepository.findBy({
    id: idCategory,
  });

  if (findById.length === 0) {
    throw new AppError("Category not found", 404);
  }

  return next();
};
