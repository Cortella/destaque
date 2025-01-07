import { Response, Request } from "express";
import { container } from "tsyringe";

import { ShowTeamsUseCase } from "./ShowTeamsUseCase";

class ShowTeamsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const showTeamsUseCase = container.resolve(ShowTeamsUseCase);
      const teams = await showTeamsUseCase.execute();

      return response.status(201).json(teams);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ShowTeamsController };
