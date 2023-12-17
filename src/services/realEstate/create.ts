import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { iReqRealEstate } from "../../interfaces/realEstate";

export async function createRealEstate(
  realEstateData: iReqRealEstate
): Promise<RealEstate> {
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const category = await categoryRepository.findOneBy({
    id: realEstateData.categoryId!,
  });

  const address: Address = addressRepository.create(realEstateData.address);

  await addressRepository.save(address);

  const realEstate: RealEstate = realEstateRepository.create({
    ...realEstateData,
    category: category,
    address: address,
  });

  await realEstateRepository.save(realEstate);

  return realEstate;
}
