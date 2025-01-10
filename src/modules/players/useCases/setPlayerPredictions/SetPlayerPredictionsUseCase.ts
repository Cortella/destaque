import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IPlayerPredictions, IPrediction } from "@modules/players/dtos/IPlayerPredictions";
import { IPredictionRepository } from "@modules/players/repositories/IPredictionsRepository";
import { IGamesRepository } from "@modules/games/repositories/IGamesRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

// TODO 
//quando o jogador fizer umnumeor de palpites validos e houver palpites invalidos, salve no banco mas avise os que estao invalidos 
@injectable()
class SetPlayerPredictionsUseCase {
  constructor(
    @inject("PredictionsRepository")
    private predictionRepository: IPredictionRepository,
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository,
    @inject("TeamsRepository")
    private teamsRepository: ITeamsRepository,
    @inject("DateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute(data: IPlayerPredictions): Promise<void> {
    console.log("estou no usecase")
    const { predictions } = data;

    const dateNow = this.dateProvider.dateNow();

    let errors = 0;
    for (const prediction of predictions) {
      console.log("prediction", prediction)
      if (
        !/^(?:10|[0-9])$/.test(String(prediction?.homeTeamScore)) ||
        !/^(?:10|[0-9])$/.test(String(prediction?.awayTeamScore))
      )
        throw new AppError(
          "Os valores dos palpites devem ser números entre 0 e 10"
        );

      const game = await this.gamesRepository.findById(prediction.gameId);

      if (!game) {
        throw new AppError(`Jogo com ID ${prediction.gameId} não encontrado.`);
      }

      const checkTimePreview = this.dateProvider.compareInHours(
        dateNow,
        game?.date
      );
      if (checkTimePreview <= 0 || game?.status != "scheduled") {
        errors++;
      } else {
        let predictionToSave : IPrediction = {
            gameId: prediction?.gameId,
            playerId: data?.playerId,
            leagueId: data?.leagueId,
            homeTeamScore: prediction?.homeTeamScore,
            awayTeamScore: prediction?.awayTeamScore

        }
        console.log("tentando entrar no repo de prediction")
        
        await this.predictionRepository.setPlayerPrediction(predictionToSave);
      }
    }

    if (errors === predictions.length)
      throw new AppError(`Rodada foi encerrada!`);
    }
    
}

export { SetPlayerPredictionsUseCase };