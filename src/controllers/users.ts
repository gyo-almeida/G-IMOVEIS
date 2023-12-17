import { Request, Response } from "express";
import { iUserReq, iUserUpdate } from "../interfaces/user";
import { createUser } from "../services/user/create";
import { deleteUser } from "../services/user/delete";
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
  const admin: boolean = req.user.admin;
  const tokenId = req.user.id;

  const user = await updateUser(id, userData, admin, tokenId);

  return resp.json(user);
}

export async function deleteUserController(
  req: Request,
  resp: Response
): Promise<Response> {
  const id = Number(req.params.id);

  await deleteUser(id);

  return resp.status(204).json();
}
