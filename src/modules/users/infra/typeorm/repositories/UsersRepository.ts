import { Repository, getRepository } from "typeorm";

import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    id,
    name,
    username,
    email,
    password
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      name,
      username,
      email,
      password,
    });
    await this.repository.save(user);
  }

  async findById(id: string): Promise<User> {

    const user = await this.repository.findOne({
        where: { id },
        select: ["id", "name", "email", "username", "created_at"],
    });

    if (!user) {
        throw new AppError("User not found!");
    }

    return user;
}

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { email },
      select: ["id", "name", "email", "username", "created_at", "password", "isAdmin"],
  });

  return user;
  }
}

export { UsersRepository };
