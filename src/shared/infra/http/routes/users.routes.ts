import { Router } from 'express'

// import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensuredAuthenticated'
import { SendForgotPasswordMailController } from '@modules/users/http/SendForgotPasswordMailController'
import { GetUserByIdController } from '@modules/users/http/GetUserByIdController'
import { CreateUserController } from '@modules/users/http/CreateUserController'

const usersRoutes = Router()

const createUserController = new CreateUserController()
const getUserByIdController = new GetUserByIdController()
const sendForgotPasswordMailController = new SendForgotPasswordMailController()

usersRoutes.post('/', createUserController.handle)
usersRoutes.get('/:user_id', getUserByIdController.handle)
usersRoutes.post('/recovery/send', sendForgotPasswordMailController.handle)

usersRoutes.patch('/:user_id/admin', createUserController.handle)
export { usersRoutes }
