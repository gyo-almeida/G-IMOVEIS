import { z } from "zod";
import { returnRealEstateSchema } from "./realEstate";
import { returnUserSchema } from "./user";

export const reqScheduleSchema = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
});

export const returnScheduleSchema = reqScheduleSchema
  .extend({
    id: z.number(),
    user: returnUserSchema,
    realEstate: returnRealEstateSchema,
  })
  .omit({ realEstateId: true });

export const getSchedulesWithoutRealEstate = returnScheduleSchema
  .omit({
    realEstate: true,
  })
  .array();

export const getSchedulesByRealEstateSchema = returnRealEstateSchema.extend({
  schedules: getSchedulesWithoutRealEstate,
});
