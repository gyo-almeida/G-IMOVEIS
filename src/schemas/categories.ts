import { z } from "zod";

export const reqCategorySchema = z.object({
  name: z.string(),
});

export const returnCategorySchema = reqCategorySchema.extend({
  id: z.number(),
});

export const multipleCategories = returnCategorySchema.array();
