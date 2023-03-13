import { z } from "zod";

export const userReqSchema = z.object({
  email: z.string().email(),
  name: z.string().max(45),
  password: z.string().min(4).max(20),
  admin: z.boolean().default(false),
});

export const returnUserSchema = userReqSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  })
  .omit({ password: true });

export const multipleUsers = returnUserSchema.array();

export const updateUserSchema = z
  .object({
    name: z.string().max(45).optional(),
    email: z.string().email().optional(),
    password: z.string().min(4).max(20).optional(),
  })
  .omit({ password: true });
