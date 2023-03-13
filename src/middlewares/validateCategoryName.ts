import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../errors";

export const validateCategoryName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const name = req.body.name;

  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findName = await categoriesRepository.findBy({
    name: name,
  });

  if (findName.length > 0) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};
