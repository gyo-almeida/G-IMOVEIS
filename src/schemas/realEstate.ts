import { z } from "zod";
import { returnCategorySchema } from "./categories";

export const addressSchema = z.object({
  id: z.number(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).nullish(),
  city: z.string().max(20),
  state: z.string().max(2),
});

export const reqRealEstateSchema = z.object({
  value: z.string(),
  size: z.number(),
  address: addressSchema.omit({ id: true }),
  categoryId: z.number().nullable(),
});

export const returnRealEstateSchema = reqRealEstateSchema
  .extend({
    id: z.number(),
    sold: z.boolean().default(false).nullish(),
    createdAt: z.string(),
    updatedAt: z.string(),
    category: returnCategorySchema,
  })
  .omit({ categoryId: true });

export const multipleRealEstateSchema = returnRealEstateSchema.array();
