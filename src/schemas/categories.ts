import { z } from "zod";
import { multipleRealEstateSchema, returnRealEstateSchema } from "./realEstate";

export const returnCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const reqCategorySchema = returnCategorySchema.omit({
  id: true,
});

export const multipleCategories = returnCategorySchema.array();

export const getRealEstateWithoutCategory = returnRealEstateSchema
  .omit({
    category: true,
    address: true,
  })
  .array();

export const getRealEstateByCategorySchema = returnCategorySchema.extend({
  realEstate: getRealEstateWithoutCategory,
});
