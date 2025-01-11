import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { REPOSITORIES } from "@utils/utils";

@injectable()
class GetUserByIdUseCase {
  constructor(
    @inject(REPOSITORIES.USERS_REPOSITORY)
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);
    console.log("user = ", user)
    if (!user) {
      throw new AppError("User Not found");
    }

    return user;
  }
}

export { GetUserByIdUseCase };
