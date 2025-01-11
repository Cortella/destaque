import { ISetResults } from "@modules/players/dtos/IPlayerPredictions";

import { Response, Request } from "express";
import { container } from "tsyringe";
import { SetEndGamesUseCase } from "./SetEndGamesUseCase";

//array de jogos devem ser do mesmo torneio
class SetEndGamesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const setEndGamesUseCase = container.resolve(
        SetEndGamesUseCase
      );
      const data: ISetResults = request.body;

      const player = await setEndGamesUseCase.execute(data);

      return response.status(201).json(player);
    } catch (error) {
      return response.status(error?.statusCode).json({ error: error?.message });
    }
  }
}

export { SetEndGamesController };
