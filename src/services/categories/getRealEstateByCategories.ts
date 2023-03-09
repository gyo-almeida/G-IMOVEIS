import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { iRealEstateByCategories } from "../../interfaces/categories";
import { getRealEstateByCategorySchema } from "../../schemas/categories";

export async function getRealEstateByCategoryService(
  idData: number
): Promise<iRealEstateByCategories> {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category = await categoryRepository.findOne({
    where: {
      id: idData,
    },
    relations: {
      realEstates: true,
    },
  });

  const returnRealEstates = getRealEstateByCategorySchema.parse(category!);

  return returnRealEstates;
}
