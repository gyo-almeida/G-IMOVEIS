import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import "dotenv/config";
import { RealEstate } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

export async function validateRealEstate(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const id = Number(req.params.id);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const verifyId = await realEstateRepository.findOneBy({
    id: id,
  });

  if (verifyId === null) {
    throw new AppError(`RealEstate not found`, 404);
  }

  return next();
}
