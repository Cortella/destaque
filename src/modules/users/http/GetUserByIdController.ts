import { Response, Request } from 'express'
import { container } from 'tsyringe'
import { GetUserByIdUseCase } from '../useCases/GetUserByIdUseCase'

class GetUserByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const getUserByIdUseCase = container.resolve(GetUserByIdUseCase)
      const { user_id } = request.params
      const user = await getUserByIdUseCase.execute(user_id)

      return response.status(200).json(user)
    } catch (error) {
      console.log
      return response.status(error?.statusCode).json({ error: error?.message })
    }
  }
}

export { GetUserByIdController }
