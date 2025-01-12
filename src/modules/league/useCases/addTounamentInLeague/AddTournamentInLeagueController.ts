import { Response, Request } from "express";
import { container } from "tsyringe";
import { AddTournamentInLeagueUseCase } from "./AddTournamentInLeagueUseCase";

class AddTournamentInLeagueController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const addTournamentLeagueUseCase = container.resolve(
        AddTournamentInLeagueUseCase
      );

      const tournamentId = request.query.tournamentId as string;
      const leagueId = request.query.leagueId as string;

      // Verifique se os valores são válidos
      if (!tournamentId || !leagueId) {
        throw new Error(
          "Missing required query parameters: 'tournamentId' and 'leagueId'."
        );
      }

      const res = await addTournamentLeagueUseCase.execute(
        tournamentId,
        leagueId
      );

      return response.status(201).json(res);
    } catch (error) {
      return response.status(error?.statusCode).json({ error: error?.message });
    }
  }
}

export { AddTournamentInLeagueController };
