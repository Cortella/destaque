import { Response, Request } from "express";
import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { container } from "tsyringe";

import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

class GetUserByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const getUserByIdUseCase = container.resolve(GetUserByIdUseCase);
      const { user_id } = request.params;
      console.log("user_id = ", user_id);
      const user = await getUserByIdUseCase.execute(user_id);

      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { GetUserByIdController };
