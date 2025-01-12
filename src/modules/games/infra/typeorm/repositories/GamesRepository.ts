import { Repository, getRepository } from "typeorm";

import { Game } from "../entities/Game";
import { IGamesRepository } from "@modules/games/repositories/IGamesRepository";
import { ICreateGameDTO } from "@modules/games/dtos/ICreateGameDTO";
import { Prediction } from "@modules/players/infra/typeorm/entities/Prediction";
import { Tournament } from "@modules/tournaments/infra/typeorm/entities/Tournament";
import { getGameResult } from "@utils/gameUtils";

class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }
  async getTornamentIdByGame(gameId: string): Promise<string> {
    const game = await this.repository.findOne({
      where: { id: gameId },
    });
    return game?.tournamentId;
  }

  getPredicionsByGameId(gameId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async setFinishedGame(result: {
    gameId: string;
    homeTeamResult: number;
    awayTeamResult: number;
  }): Promise<void> {

    await this.repository.update(
      { id: result.gameId },
      {
        status: "finished",
        awayTeamResult: result.awayTeamResult,
        homeTeamResult: result.homeTeamResult,
        result: getGameResult(result.homeTeamResult, result.awayTeamResult),
      }
    );
  }
  async create(data: ICreateGameDTO): Promise<void> {
    const Game = this.repository.create(data);
    await this.repository.save(Game);
  }

  async findById(id: string): Promise<Game> {
    const Game = await this.repository.findOne({
      where: { id },
    });
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
