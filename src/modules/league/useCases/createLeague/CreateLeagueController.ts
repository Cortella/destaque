import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateLeagueUseCase } from "./CreateLeagueUseCase";
import { ICreateLeagueDTO } from "@modules/league/dto/ICreateLeagueDTO";

class CreateLeagueController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createLeagueUseCase = container.resolve(
        CreateLeagueUseCase
      );
      const data: ICreateLeagueDTO = request.body;

      const league = await createLeagueUseCase.execute(data);

      return response.status(201).json(league);
    } catch (error) {
      return response.status(error?.statusCode).json({ error: error?.message });
    }
  }
}

export { CreateLeagueController };