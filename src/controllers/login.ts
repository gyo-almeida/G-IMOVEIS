import { Request, Response } from "express";
import { iLoginReq } from "../interfaces/login";
import { createLogin } from "../services/login/login";

export async function createLoginController(
  req: Request,
  resp: Response
): Promise<Response> {
  const loginData: iLoginReq = req.body;

  const token = await createLogin(loginData);

  return resp.json(token);
}
