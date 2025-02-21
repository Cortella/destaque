import 'reflect-metadata'
import { env } from '../../../env'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import { AppError } from '@shared/errors/AppError'
import * as dotenv from 'dotenv'
dotenv.config()
import '../../container'
import '@shared/infra/typeorm'

import { router } from './routes'
import swaggerFile from '../../../swagger.json'
import { STATUS_CODE } from '@utils/http'

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      })
    }

    return response.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: `Internal server errror - ${err.message}`,
    })
  },
)
app.listen(3333, () =>
  console.log(
    `\nAPI URL: http://localhost:${env.PORT}
    \nSwagger: http://localhost:${env.PORT}/api-docs`,
  ),
)
