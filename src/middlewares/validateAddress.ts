import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import "dotenv/config";
import { Address } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { iAddress } from "../interfaces/realEstate";

export async function validateAddress(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const address: iAddress = req.body.address;

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const verifyAddress = await addressRepository.findOneBy({
    street: address.street,
  });

  if (verifyAddress) {
    throw new AppError(`Address already exists`, 409);
  }

  return next();
}
