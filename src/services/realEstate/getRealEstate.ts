import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";

export async function getRealEstate(): Promise<any> {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate: Array<RealEstate> = await realEstateRepository.find({
    relations: {
      address: true,
    },
  });

  return realEstate;
}
