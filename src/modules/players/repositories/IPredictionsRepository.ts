import { IPrediction } from "@modules/players/dtos/IPlayerPredictions";
import { Prediction } from "@modules/players/infra/typeorm/entities/Prediction";

interface IPredictionRepository {
  setPlayerPrediction(data: IPrediction): Promise<void>;
  setEndGamePrediction(data: IPrediction): Promise<void>;
  getPredictionWithLeague(predictionId: string): Promise<Prediction>;
  findById(id: string): Promise<Prediction>;
  getPredictionByGameId(gameId: string): Promise<Prediction[]>;
  findPredictionByPlayerToLeague(playerId: string, leagueId: string): Promise<Prediction[]>;
}

export { IPredictionRepository };
