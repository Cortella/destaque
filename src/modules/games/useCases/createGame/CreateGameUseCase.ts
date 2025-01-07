import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ICreateGameDTO } from "@modules/games/dtos/ICreateGameDTO";
import { IGamesRepository } from "@modules/games/repositories/IGamesRepository";

@injectable()
class CreateGameUseCase {
  constructor(
    @inject("GamesRepository")
    private gameRepository: IGamesRepository
  ) {}

  async execute(data: ICreateGameDTO): Promise<void> {
    const gameAlreadyExists = await this.gameRepository.findById(data?.id);

    if (gameAlreadyExists) {
      throw new AppError("game Already Exists", 404);
    }

    await this.gameRepository.create(data);
  }
}

export { CreateGameUseCase };
