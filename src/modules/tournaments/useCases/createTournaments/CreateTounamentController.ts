import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateTournamentUseCase } from "./CreateTounamentUseCase";
import { ICreateTournamentsDTO } from "@modules/tournaments/dtos/ICreateTournamentsDTO";

class CreateTournamentController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createTournament = container.resolve(CreateTournamentUseCase);
      const data : ICreateTournamentsDTO = request.body;

      const Tournament = await createTournament.execute(data);

      return response.status(201).json(Tournament);
    } catch (error) {
      return response.status(error?.statusCode).json({ error: error?.message });
    }
  }
}

export { CreateTournamentController };
