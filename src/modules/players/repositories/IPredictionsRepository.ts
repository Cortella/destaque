import { Game } from "@modules/games/infra/typeorm/entities/Game";
import { IPoitsToLeagueDTO } from "@modules/league/dto/IPointsToLeagueDTO";
import { IPrediction } from "@modules/players/dtos/IPlayerPredictions";
import { Prediction } from "@modules/players/infra/typeorm/entities/Prediction";

interface IPredictionRepository {
  setPlayerPrediction(data: IPrediction): Promise<void>;
  setEndGamePrediction(data: IPrediction): Promise<void>;
  getPredictionWithLeague(predictionId: string): Promise<Prediction>;
  findById(id: string): Promise<Prediction>;
  findPredictionByPlayerToLeague(
    playerId: string,
    leagueId: string
  ): Promise<Prediction[]>;
  setPlayerPoints(
    leagueMetricPoints: IPoitsToLeagueDTO,
    gameId: string,
    leagueId: string
  ): Promise<void>;
  getPredictionsByGameId(gameId: string): Promise<Prediction[]>;
  getPredictionsByLeagueGameId(gameId: string, leagueId: string): Promise<Prediction[]>;
}

export { IPredictionRepository };
