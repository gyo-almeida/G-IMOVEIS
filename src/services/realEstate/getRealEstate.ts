import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { multipleRealEstateSchema } from "../../schemas/realEstate";
import { iRealEstates } from "../../interfaces/realEstate";

export async function getRealEstate(): Promise<any> {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate: Array<RealEstate> = await realEstateRepository.find({
    relations: {
      address: true,
      category: true,
    },
  });

  //   const realEstateList = multipleRealEstateSchema.parse(realEstate);

  //   console.log(realEstateList);
  return realEstate;
}
