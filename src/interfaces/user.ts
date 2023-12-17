import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  multipleUsers,
  userReqSchema,
  returnUserSchema,
} from "../schemas/user";

export type iUserReq = z.infer<typeof userReqSchema>;
export type iUser = z.infer<typeof returnUserSchema>;
export type iUsers = z.infer<typeof multipleUsers>;
export type iUserUpdate = DeepPartial<iUserReq>;
