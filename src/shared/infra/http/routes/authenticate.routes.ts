import { Router } from 'express'

import { AuthenticateUserController } from '@modules/users/http/AuthenticateUserController'
import { RefreshTokenController } from '@modules/users/http/RefreshTokenController'

const authenticateRoutes = Router()

const authenticateUserController = new AuthenticateUserController()
const refreshTokenController = new RefreshTokenController()

authenticateRoutes.post('/login', authenticateUserController.handle)
authenticateRoutes.post('/refresh-token', refreshTokenController.handle)

export { authenticateRoutes }
