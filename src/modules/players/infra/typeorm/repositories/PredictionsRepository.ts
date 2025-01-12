import { IPrediction } from "@modules/players/dtos/IPlayerPredictions";
import { IPredictionRepository } from "@modules/players/repositories/IPredictionsRepository";
import { Prediction } from "@modules/players/infra/typeorm/entities/Prediction";
import { Repository, getRepository } from "typeorm";
import { IPoitsToLeagueDTO } from "@modules/league/dto/IPointsToLeagueDTO";
import { Game } from "@modules/games/infra/typeorm/entities/Game";
import { getPlayerPoints } from "@utils/gameUtils";

export class PredictionRepository implements IPredictionRepository {
  private repository: Repository<Prediction>;
  private gameRepository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Prediction);
    this.gameRepository = getRepository(Game);
  }
  async getPredictionsByLeagueGameId(
    gameId: string,
    leagueId: string
  ): Promise<Prediction[]> {
    const predictions = await this.repository.find({
      where: {
        game: { id: gameId },
        league: { id: leagueId },
      },
    });

    return predictions;
  }

  async getPredictionsByGameId(gameId: string): Promise<Prediction[]> {
    const predictions = await this.repository.find({ where: { gameId } });
    return predictions;
  }

  async setPlayerPoints(
    leagueMetricPoints: IPoitsToLeagueDTO,
    gameId: string,
    leagueId: string
  ): Promise<void> {
    const predictions = await this.getPredictionsByLeagueGameId(
      gameId,
      leagueId
    );
    const game = await this.gameRepository.findOne({ where: { id: gameId } });
    for (const predicion of predictions) {
      let points = getPlayerPoints(predicion, game, leagueMetricPoints);
      await this.repository.update(predicion.id, { points });
    }
  }
  getPredictionWithLeague(predictionId: string): Promise<Prediction> {
    throw new Error("Method not implemented.");
  }
  setEndGamePrediction(data: IPrediction): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async setPlayerPrediction(data: IPrediction): Promise<void> {
    const prediction = this.repository.create(data);
    await this.repository.save(prediction);
  }

  findById(id: string): Promise<Prediction> {
    throw new Error("Method not implemented.");
  }
  findPredictionByPlayerToLeague(
    playerId: string,
    leagueId: string
  ): Promise<Prediction[]> {
    throw new Error("Method not implemented.");
  }
}
