import { IPrediction } from "@modules/players/dtos/IPlayerPredictions";
import { IPredictionRepository } from "@modules/players/repositories/IPredictionsRepository";
import { Prediction } from "@modules/teams/infra/typeorm/entities/Prediction";
import { Repository, getRepository } from "typeorm";

export class PredictionRepository implements IPredictionRepository {
    private repository: Repository<Prediction>;

    constructor() {
      this.repository = getRepository(Prediction);
    }
    async setPlayerPrediction(data: IPrediction): Promise<void> {
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