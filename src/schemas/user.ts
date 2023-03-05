import { z } from "zod";
import { hashSync } from "bcryptjs";

export const userReqSchema = z.object({
  name: z.string().max(45),
  email: z.string().email(),
  password: z
    .string()
    .min(4)
    .max(20)
    .transform((pass) => {
      return hashSync(pass, 10);
    }),
  admin: z.boolean().default(false),
});

export const returnUserSchema = userReqSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deleteAt: z.string().optional(),
  })
  .omit({ password: true });

export const multipleUsers = returnUserSchema.array();

export const updateUserSchema = userReqSchema.partial();
