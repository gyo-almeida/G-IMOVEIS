import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { iReturnCategory } from "../../interfaces/categories";

export async function getRealEstateByCategoryService(
  idData: number
): Promise<iReturnCategory | null> {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category = await categoryRepository.findOne({
    where: {
      id: idData,
    },
    relations: {
      realEstate: true,
    },
  });

  return category;
}
