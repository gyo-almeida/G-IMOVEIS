import { Repository } from "typeorm";
import { RealEstate, Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";
import { iScheduleByRealEstate } from "../../interfaces/schedules";
import { getSchedulesByRealEstateSchema } from "../../schemas/schedules";

export async function getSchedulesByRealEstateService(
  id: number
): Promise<RealEstate | null> {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const schedulesRealEstate = realEstateRepository
    .createQueryBuilder("real_estate")
    .select(["real_estate", "schedules"])
    .innerJoin("real_estate.schedules", "schedules")
    .where("real_estate.id= :id", { id: id })
    .getOne();

  //   const returnSchedules = getSchedulesByRealEstateSchema.parse();

  return schedulesRealEstate!;
}
