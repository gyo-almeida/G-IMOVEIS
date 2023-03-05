import { Repository } from "typeorm";
import { iUser, iUserUpdate } from "../../interfaces/user";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnUserSchema } from "../../schemas/user";

export async function updateUser(
  id: number,
  newUser: iUserUpdate
): Promise<iUser> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUser = await userRepository.findOneBy({
    id: id,
  });

  const user = userRepository.create({
    ...oldUser,
    ...newUser,
  });

  await userRepository.save(user);

  const updateUserData = returnUserSchema.parse(user);

  return updateUserData;
}
