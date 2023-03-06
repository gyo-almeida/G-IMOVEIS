import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { multipleCategories } from "../../schemas/categories";
import { iCategories } from "../../interfaces/categories";

export async function getCategories(): Promise<iCategories> {
  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories: Array<Category> = await categoriesRepository.find();

  const categoriesList = multipleCategories.parse(categories);

  return categoriesList;
}
