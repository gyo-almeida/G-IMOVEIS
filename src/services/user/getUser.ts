import { Repository } from "typeorm";
import { iUsers } from "../../interfaces/user";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { multipleUsers } from "../../schemas/user";

export async function getUsers(): Promise<iUsers> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: Array<User> = await userRepository.find();

  const userList = multipleUsers.parse(user);

  return userList;
}
