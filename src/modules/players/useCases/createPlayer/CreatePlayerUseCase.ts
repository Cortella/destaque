import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ICreatePlayerDTO } from "@modules/players/dtos/ICreatePlayerDTO";
import { IPlayersRepository } from "@modules/players/repositories/IPlayersRepository";

@injectable()
class CreatePlayerUseCase {
  constructor(
    @inject("PlayersRepository")
    private playersRepository: IPlayersRepository
  ) {}

  async execute(data: ICreatePlayerDTO, userId: string): Promise<void> {
    const playersAlreadyExists = await this.playersRepository.findByUsername(data?.username);

    if (playersAlreadyExists) {
      throw new AppError("Username já está sendo usado", 400);
    }

    console.log("estou indo pro rep")
    await this.playersRepository.create(data, userId);
  }
}

export { CreatePlayerUseCase };
