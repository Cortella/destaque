import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import auth from '@config/auth'
import { AppError } from '@shared/errors/AppError'
import { STATUS_CODE } from '@utils/http'

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('Não Autorizado', STATUS_CODE.UNAUTHORIZED)
  }

  const [, token] = authHeader.split(' ')
  try {
    const { sub: user_id } = verify(token, auth.secret_token) as IPayload

    request.user = {
      id: user_id,
    }

    next()
  } catch {
    throw new AppError('Invalid token!', STATUS_CODE.UNAUTHORIZED)
  }
}
