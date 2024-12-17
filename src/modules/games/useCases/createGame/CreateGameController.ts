import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateGameUseCase } from "./CreateGameUseCase";
import { ICreateGameDTO } from "../../dtos/ICreateGameDTO";

class CreateGameController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createGameUseCase = container.resolve(CreateGameUseCase);
      const data: ICreateGameDTO = request.body;

      const game = await createGameUseCase.execute(data);

      return response.status(201).json(game);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateGameController };
