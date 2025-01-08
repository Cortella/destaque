import { IPlayerPredictions } from "@modules/players/dtos/IPlayerPredictions";
import { SetPlayerPredictionsUseCase } from "./SetPlayerPredictionsUseCase";
import { Response, Request } from "express";
import { container } from "tsyringe";

class SetPlayerPredictionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const setPlayerPredictionsUseCase = container.resolve(
        SetPlayerPredictionsUseCase
      );
      const data: IPlayerPredictions = request.body;

      const player = await setPlayerPredictionsUseCase.execute(data);

      return response.status(201).json(player);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { SetPlayerPredictionsController };
