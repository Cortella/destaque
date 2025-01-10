import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ILeagueRepository } from "@modules/league/repositories/ILeagueRepository";
import { ITournamentRepository } from "@modules/tournaments/repositories/ITournamentRepository";

@injectable()
class AddTournamentInLeagueUseCase {
  constructor(
    @inject("LeagueRepository")
    private leagueRepository: ILeagueRepository,
    @inject("TournamentsRepository")
    private tournamentRepository: ITournamentRepository
  ) {}

  async execute(tournamentId: string, leagueId: string): Promise<Object> {
    const tournament = await this.tournamentRepository.findById(tournamentId);
    const league = await this.leagueRepository.getById(leagueId);

    if (!tournament || !league)
      throw new AppError("Liga ou torneio nao encontrado", 404);

    await this.leagueRepository.addTournamentInLeague(tournamentId, leagueId);
    return { message: "Torneio adicionado na liga" };
  }
}

export { AddTournamentInLeagueUseCase };
