import { ISetResults } from "@modules/players/dtos/IPlayerPredictions";
import { ICreateGameDTO } from "../dtos/ICreateGameDTO";
import { Game } from "../infra/typeorm/entities/Game";
import { Prediction } from "@modules/players/infra/typeorm/entities/Prediction";
import { Tournament } from "@modules/tournaments/infra/typeorm/entities/Tournament";

interface IGamesRepository {
  create(data: ICreateGameDTO): Promise<void>;
  findById(id: string): Promise<Game>;
  getTornamentIdByGame(gameId: string): Promise<string>;
  getPredicionsByGameId(gameId: string): Promise<void>;
  findByName(name: string): Promise<Game>;
  show(): Promise<Game[]>;
  setFinishedGame(result: {
    gameId: string;
    homeTeamResult: number;
    awayTeamResult: number;
  }): Promise<void>;
}

export { IGamesRepository };
