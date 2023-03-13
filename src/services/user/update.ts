import { Repository } from "typeorm";
import { iUser, iUserUpdate } from "../../interfaces/user";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnUserSchema } from "../../schemas/user";
import { AppError } from "../../errors";

export async function updateUser(
  id: number,
  newUser: iUserUpdate,
  admin: boolean,
  tokenId: number
): Promise<iUser> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUser = await userRepository.findOneBy({
    id: id,
  });

  if (!admin && id !== tokenId && tokenId !== oldUser?.id) {
    throw new AppError("Insufficient permission", 403);
  }

  const user = userRepository.create({
    ...oldUser,
    ...newUser,
  });

  await userRepository.save(user);

  const updateUserData = returnUserSchema.parse(user);

  return updateUserData;
}
