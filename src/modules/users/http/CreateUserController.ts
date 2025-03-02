import { Response, Request } from 'express'
import { ICreateUserDTO } from 'modules/users/dtos/ICreateUserDTO'
import { container } from 'tsyringe'

import { STATUS_CODE } from '@utils/http'
import { CreateUserUseCase } from '../useCases/CreateUserUseCase'

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      console.log('CONTROLLER')
      const createUserUseCase = container.resolve(CreateUserUseCase)
      const {
        name,
        email,
        password,
        confirmPassword,
        birthDate,
      }: ICreateUserDTO = request.body

      const user = await createUserUseCase.execute({
        name,
        email,
        password,
        confirmPassword,
        birthDate,
      })

      return response.status(STATUS_CODE.CREATED).json(user)
    } catch (error) {
      console.log('estou no catch do controller')
      console.log('erro ' + error)
      return response.status(error?.statusCode).json({ error: error?.message })
    }
  }
}

export { CreateUserController }
