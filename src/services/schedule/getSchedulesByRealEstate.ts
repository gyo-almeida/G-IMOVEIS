import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

export async function getSchedulesByRealEstateService(
  id: number
): Promise<RealEstate | null | { message: string }> {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const schedulesRealEstate = await realEstateRepository
    .createQueryBuilder("real_estate")
    .innerJoinAndSelect("real_estate.address", "address")
    .innerJoinAndSelect("real_estate.category", "category")
    .innerJoinAndSelect("real_estate.schedules", "schedules")
    .innerJoinAndSelect("schedules.user", "user")
    .where("real_estate.id= :id", { id: id })
    .getOne();

  if (schedulesRealEstate === null) {
    throw new AppError(`RealEstate not found`, 404);
  }

  return schedulesRealEstate;
}
