import { Repository, getRepository } from "typeorm";

import { AppError } from "@shared/errors/AppError";
import { Game } from "../entities/Game";
import { IGamesRepository } from "@modules/games/repositories/IGamesRepository";
import { ICreateGameDTO } from "@modules/games/dtos/ICreateGameDTO";

class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }
  async create(data: ICreateGameDTO): Promise<void> {
    const Game = this.repository.create(data);
    await this.repository.save(Game);
  }

  async findById(id: string): Promise<Game> {
    const Game = await this.repository.findOne({
      where: { id },
    });

    if (!Game) {
      throw new AppError("User not found!", 404);
    }

    return Game;
  }

  async findByName(name: string): Promise<Game> {
    const Game = await this.repository.findOne({
      where: { name },
    });

    return Game;
  }

  show(): Promise<Game[]> {
    const Games = this.repository.find();
    return Games;
  }
}

export { GamesRepository };
