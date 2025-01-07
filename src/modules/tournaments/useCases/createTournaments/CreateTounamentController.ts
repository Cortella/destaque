import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateTournamentUseCase } from "./CreateTounamentUseCase";

class CreateTournamentController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createTournament = container.resolve(CreateTournamentUseCase);
      const data = request.body;

      const Tournament = await createTournament.execute(data);

      return response.status(201).json(Tournament);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateTournamentController };
