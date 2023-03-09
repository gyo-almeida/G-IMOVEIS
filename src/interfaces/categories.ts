import { z } from "zod";
import {
  getRealEstateByCategorySchema,
  multipleCategories,
  reqCategorySchema,
  returnCategorySchema,
} from "../schemas/categories";

export type iReqCategory = z.infer<typeof reqCategorySchema>;
export type iReturnCategory = z.infer<typeof returnCategorySchema>;
export type iCategories = z.infer<typeof multipleCategories>;
export type iRealEstateByCategories = z.infer<
  typeof getRealEstateByCategorySchema
>;
