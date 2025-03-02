import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ILeagueRepository } from "@modules/league/repositories/ILeagueRepository";
import { ITournamentRepository } from "@modules/tournaments/repositories/ITournamentRepository";
import { REPOSITORIES } from "@utils/utils";

@injectable()
class AddTournamentInLeagueUseCase {
  constructor(
    @inject(REPOSITORIES.LEAGUE_REPOSITORY)
    private leagueRepository: ILeagueRepository,
    @inject(REPOSITORIES.TOURNAMENTS_REPOSITORY)
    private tournamentRepository: ITournamentRepository
  ) {}

  async execute(tournamentId: string, leagueId: string): Promise<object> {
    const tournament = await this.tournamentRepository.findById(tournamentId);
    const league = await this.leagueRepository.getById(leagueId);

    if (!tournament || !league)
      throw new AppError("Liga ou torneio nao encontrado", 404);

    await this.leagueRepository.addTournamentInLeague(tournamentId, leagueId);
    return { message: "Torneio adicionado na liga" };
  }
}

export { AddTournamentInLeagueUseCase };
