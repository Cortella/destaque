import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateTounamentUseCase } from "./CreateTounamentUseCase";

class CreateTounamentController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createTournament = container.resolve(CreateTounamentUseCase);
      const data = request.body;

      const Tounament = await createTournament.execute(data);

      return response.status(201).json(Tounament);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateTounamentController };
