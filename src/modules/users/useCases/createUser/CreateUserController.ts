import { Response, Request } from "express";
import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createUserUseCase = container.resolve(CreateUserUseCase);
      const {
        name,
        email,
        password,
        confirmPassword,
        birthDate,
      }: ICreateUserDTO = request.body;

      const user = await createUserUseCase.execute({
        name,
        email,
        password,
        confirmPassword,
        birthDate,
      });

      return response.status(201).json(user);
    } catch (error) {
      return response.status(error?.statusCode).json({ error: error?.message });
    }
  }
}

export { CreateUserController };
