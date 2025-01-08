import { IPrediction } from "@modules/players/dtos/IPlayerPredictions";
import { Prediction } from "@modules/teams/infra/typeorm/entities/Prediction";

interface IPredictionRepository {
  setPlayerPrediction(data: IPrediction): Promise<void>;
  findById(id: string): Promise<Prediction>;
  findPredictionByPlayerToLeague(playerId: string, leagueId: string): Promise<Prediction[]>;
}

export { IPredictionRepository };
