import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { AuthenticateUseCase } from '../useCases/AuthenticateUseCase'

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body

    const authenticateUserUseCase = container.resolve(AuthenticateUseCase)

    const token = await authenticateUserUseCase.execute({
      password,
      email,
    })

    return response.json(token)
  }
}

export { AuthenticateUserController }
