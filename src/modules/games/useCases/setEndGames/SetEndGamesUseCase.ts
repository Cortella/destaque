import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ISetResults } from "@modules/players/dtos/IPlayerPredictions";
import { IGamesRepository } from "@modules/games/repositories/IGamesRepository";
import { ILeagueRepository } from "@modules/league/repositories/ILeagueRepository";
import { IPredictionRepository } from "@modules/players/repositories/IPredictionsRepository";
import { REPOSITORIES } from "@utils/utils";

@injectable()
class SetEndGamesUseCase {
  constructor(
    @inject(REPOSITORIES.GAMES_REPOSITORY)
    private gamesRepository: IGamesRepository,
    @inject(REPOSITORIES.LEAGUE_REPOSITORY)
    private leagueRepository: ILeagueRepository,
    @inject(REPOSITORIES.PREDICTIONS_REPOSITORY)
    private predictionRepository: IPredictionRepository
  ) {}

  async execute(data: ISetResults): Promise<void> {
    const { results } = data;

    const tournamentId = await this.gamesRepository.getTornamentIdByGame(
      results[0].gameId
    );

    if (!tournamentId)
      throw new AppError(
        `Jogo com ID ${results[0].gameId} nao pertence a nenhum torneio.`
      );

    const leagues = await this.leagueRepository.findLeaguesByTournamentId(
      tournamentId
    );

    for (const result of results) {
      const game = await this.gamesRepository.findById(result?.gameId);
      if (!game)
        throw new AppError(`Jogo com ID ${result?.gameId} não encontrado.`);

      if (game?.status === "canceled" || game?.status === "finished")
        continue

      await this.gamesRepository.setFinishedGame(result)

      if (leagues) {
        for (const league of leagues) {
          await this.predictionRepository.setPlayerPoints({
            pointsperFullHit: league?.pointsPerFullHit,
            pointsPerResult: league?.pointsPerResult,
            pointsPerTeamGoals: league?.pointsPerTeamGoals,
          }, game?.id, league?.id);
        }
      }
    }
  }
}

export { SetEndGamesUseCase };
