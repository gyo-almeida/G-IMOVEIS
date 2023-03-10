import { Request, Response } from "express";
import { createScheduleService } from "../services/schedule/create";
import { getSchedulesByRealEstateService } from "../services/schedule/getSchedulesByRealEstate";

export async function createSchedulesController(
  req: Request,
  resp: Response
): Promise<Response> {
  const userId = req.user.id;
  const scheduleData = req.body;
  const hour: string = req.body.hour;
  const date = new Date(req.body.date);

  const splitHour = hour.split(":");

  const newSchedule = await createScheduleService(
    userId,
    scheduleData,
    date,
    splitHour
  );

  return resp.status(201).json(newSchedule);
}

export async function getScheduleByRealEstateController(
  req: Request,
  resp: Response
): Promise<Response> {
  const idData = Number(req.params.id);

  const listSchedulesByRealEstate = await getSchedulesByRealEstateService(
    idData
  );

  return resp.json(listSchedulesByRealEstate);
}
