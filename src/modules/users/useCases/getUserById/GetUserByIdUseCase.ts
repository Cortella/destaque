import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { REPOSITORIES } from "@utils/utils";
import { z } from "zod";

@injectable()
class GetUserByIdUseCase {
  constructor(
    @inject(REPOSITORIES.USERS_REPOSITORY)
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<User> {
    const idSchema = z.string().uuid("ID inválido");
    try {
      idSchema.parse(id);
      const user = await this.usersRepository.findById(id);
      if (!user) {
        throw new AppError("User Not found", 404);
      }
      return user;
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new AppError(error.errors[0].message, 400);
      }
      throw error;
    }
  }
}

export { GetUserByIdUseCase };
