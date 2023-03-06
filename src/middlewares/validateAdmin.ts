import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import "dotenv/config";

export function validateAdmin(
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  const admin = req.user.admin;

  if (!admin) {
    throw new AppError(`User does't have permission`, 403);
  }

  return next();
}
