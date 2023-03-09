import { z } from "zod";
import { multipleRealEstateSchema, returnRealEstateSchema } from "./realEstate";

export const reqCategorySchema = z.object({
  name: z.string(),
});

export const returnCategorySchema = reqCategorySchema.extend({
  id: z.number(),
});

export const multipleCategories = returnCategorySchema.array();

export const getRealEstateWithoutCategory = returnRealEstateSchema
  .omit({
    category: true,
    address: true,
  })
  .array();

export const getRealEstateByCategorySchema = returnCategorySchema.extend({
  realEstates: getRealEstateWithoutCategory,
});
