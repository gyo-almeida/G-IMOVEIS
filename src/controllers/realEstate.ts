import { Request, Response } from "express";
import { iReqRealEstate } from "../interfaces/realEstate";
import { createRealEstate } from "../services/realEstate/create";
import { getRealEstate } from "../services/realEstate/getRealEstate";

export async function createRealEstateController(
  req: Request,
  resp: Response
): Promise<Response> {
  const realEstateData: iReqRealEstate = req.body;
  console.log(realEstateData.categoryId);

  const realEstate = await createRealEstate(realEstateData);

  return resp.status(201).json(realEstate);
}

export async function getRealEstateController(
  req: Request,
  resp: Response
): Promise<Response> {
  const listRealEstate = await getRealEstate();

  return resp.json(listRealEstate);
}
