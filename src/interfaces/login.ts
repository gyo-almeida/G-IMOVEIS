import { z } from "zod";
import { loginReqSchema } from "../schemas/login";

export type iLoginReq = z.infer<typeof loginReqSchema>;
