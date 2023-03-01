import { Request, Response } from "express";

export async function createUserController(
  req: Request,
  resp: Response
): Promise<Response> {
  const data = req.body;
  return resp.status(201).json();
}
