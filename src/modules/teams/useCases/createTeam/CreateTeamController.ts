import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateTeamUseCase } from "./CreateTeamUseCase";
import { ICreateTeamDTO } from "../../dtos/ICreateTeamDTO";

class CreateTeamController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createTeamUseCase = container.resolve(CreateTeamUseCase);
      const data: ICreateTeamDTO = request.body;

      const Team = await createTeamUseCase.execute(data);

      return response.status(201).json(Team);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateTeamController };
