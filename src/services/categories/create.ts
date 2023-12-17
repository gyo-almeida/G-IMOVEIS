import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iReqCategory, iReturnCategory } from "../../interfaces/categories";
import { returnCategorySchema } from "../../schemas/categories";

export async function createCategory(
  categoryData: iReqCategory
): Promise<iReturnCategory> {
  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category = categoriesRepository.create(categoryData);

  await categoriesRepository.save(category);

  const newCategory = returnCategorySchema.parse(category);

  return newCategory;
}
