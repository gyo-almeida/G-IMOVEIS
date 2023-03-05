import { Request, Response } from "express";
import { iUserReq, iUserUpdate } from "../interfaces/user";
import { createUser } from "../services/user/create";
import { getUsers } from "../services/user/getUser";
import { updateUser } from "../services/user/update";

export async function createUserController(
  req: Request,
  resp: Response
): Promise<Response> {
  const data: iUserReq = req.body;

  const newUser = await createUser(data);

  return resp.status(201).json(newUser);
}

export async function getUsersController(
  req: Request,
  resp: Response
): Promise<Response> {
  const users = await getUsers();

  return resp.json(users);
}

export async function updateUserController(
  req: Request,
  resp: Response
): Promise<Response> {
  const id = Number(req.params.id);
  const userData: iUserUpdate = req.body;

  const user = await updateUser(id, userData);

  return resp.json(user);
}

export async function deleteUserController(
  req: Request,
  resp: Response
): Promise<Response> {
  const data: iUserReq = req.body;

  const newUser = await createUser(data);

  return resp.status(201).json(newUser);
}
