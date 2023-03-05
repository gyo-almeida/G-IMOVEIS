import { Repository } from "typeorm";
import { iUserReq, iUser } from "../../interfaces/user";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnUserSchema } from "../../schemas/user";

export async function createUser(userData: iUserReq): Promise<iUser> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const newUser = returnUserSchema.parse(user);

  return newUser;
}
