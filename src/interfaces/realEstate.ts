import { z } from "zod";
import {
  reqRealEstateSchema,
  returnRealEstateSchema,
  addressSchema,
  multipleRealEstateSchema,
} from "../schemas/realEstate";

export type iReqRealEstate = z.infer<typeof reqRealEstateSchema>;
export type iRealEstate = z.infer<typeof returnRealEstateSchema>;
export type iAddress = z.infer<typeof addressSchema>;
export type iRealEstates = z.infer<typeof multipleRealEstateSchema>;
