import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreatePlayerUseCase } from "./CreatePlayerUseCase";
import { ICreatePlayerDTO } from "@modules/players/dtos/ICreatePlayerDTO";

class CreatePlayerController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createPlayerUseCase = container.resolve(CreatePlayerUseCase);
      const data: ICreatePlayerDTO = request.body;
      const userId = request?.user?.id;
      console.log(userId)


      const player = await createPlayerUseCase.execute(data, userId);

      return response.status(201).json(player);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreatePlayerController };
