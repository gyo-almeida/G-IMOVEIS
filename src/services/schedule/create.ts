import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import { iReqSchedule } from "../../interfaces/schedules";

export async function createScheduleService(
  userId: number,
  scheduleData: iReqSchedule,
  date: Date,
  hour: string[]
): Promise<Schedule> {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const validateDateAndHour = await scheduleRepository
    .createQueryBuilder("schedules")
    .where("schedules.hour = :hour", { hour: scheduleData.hour })
    .andWhere("schedules.date = :date", { date: scheduleData.date })
    .andWhere("schedules.realEstate = :realEstate", {
      realEstate: scheduleData.realEstateId,
    })
    .getOne();

  if (validateDateAndHour) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  if (date.getDay() === 6 || date.getDay() === 5) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }
  console.log(hour[0]);
  if (hour[0] > "18") {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  if ("08" > hour[0]) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  const validateUser = await scheduleRepository
    .createQueryBuilder("schedules")
    .where("schedules.hour = :hour", { hour: scheduleData.hour })
    .andWhere("schedules.date = :date", { date: scheduleData.date })
    .andWhere("schedules.user = :user", {
      user: userId,
    })
    .getOne();

  if (validateUser) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const realEstate = await realEstateRepository.findOneBy({
    id: scheduleData.realEstateId!,
  });

  if (!realEstate) {
    throw new AppError(`RealEstate not found`, 404);
  }

  const user = await userRepository.findOneBy({
    id: userId,
  });

  const schedule: Schedule = scheduleRepository.create({
    ...scheduleData,
    realEstate: realEstate!,
    user: user!,
  });

  const newSchedule = await scheduleRepository.save(schedule);

  return newSchedule;
}
