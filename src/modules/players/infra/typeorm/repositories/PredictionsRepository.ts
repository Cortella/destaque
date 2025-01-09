import { IPrediction } from "@modules/players/dtos/IPlayerPredictions";
import { IPredictionRepository } from "@modules/players/repositories/IPredictionsRepository";
import { Prediction } from "@modules/players/infra/typeorm/entities/Prediction";
import { Repository, getRepository } from "typeorm";

export class PredictionRepository implements IPredictionRepository {
    private repository: Repository<Prediction>;

    constructor() {
      this.repository = getRepository(Prediction);
    }
    getPredictionWithLeague(predictionId: string): Promise<Prediction> {
        throw new Error("Method not implemented.");
    }
    setEndGamePrediction(data: IPrediction): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getPredictionByGameId(gameId: string): Promise<Prediction[]> {
        throw new Error("Method not implemented.");
    }
    async setPlayerPrediction(data: IPrediction): Promise<void> {
        console.log("tentando salvar", data)
        const prediction = this.repository.create(data);
        await this.repository.save(prediction)
    }

    findById(id: string): Promise<Prediction> {
        throw new Error("Method not implemented.");
    }
    findPredictionByPlayerToLeague(playerId: string, leagueId: string): Promise<Prediction[]> {
        throw new Error("Method not implemented.");
    }
    
}