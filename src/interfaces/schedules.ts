import { z } from "zod";
import {
  getSchedulesByRealEstateSchema,
  reqScheduleSchema,
  returnScheduleSchema,
} from "../schemas/schedules";

export type iReqSchedule = z.infer<typeof reqScheduleSchema>;
export type iSchedule = z.infer<typeof returnScheduleSchema>;
export type iScheduleByRealEstate = z.infer<
  typeof getSchedulesByRealEstateSchema
>;
