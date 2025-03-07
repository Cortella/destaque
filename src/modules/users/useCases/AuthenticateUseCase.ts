import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

import { auth } from '@config/auth'
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensrepository'
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider'
import { AppError } from '@shared/errors/AppError'
import { PROVIDERS, REPOSITORIES } from '@utils/utils'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
  refresh_token: string
}

@injectable()
class AuthenticateUseCase {
  constructor(
    @inject(REPOSITORIES.USERS_REPOSITORY)
    private usersRepository: IUsersRepository,
    @inject(REPOSITORIES.USERS_TOKENS_REPOSITORY)
    private usersTokensRepository: IUsersTokensRepository,
    @inject(PROVIDERS.DATE_PROVIDER)
    private dateProvider: IDateProvider,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)
    const {
      expires_in_token,
      secret_refresh_token,
      secret_token,
      expires_in_refresh_token,
      expires_refresh_token_days,
    } = auth

    if (!user) {
      throw new AppError('Email ou senha incorretos!')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Email ou senha incorretos!')
    }

    const token = sign({}, String(secret_token), {
      subject: user.id,
      expiresIn: expires_in_token,
    })

    const refresh_token_expires_date = this.dateProvider.addDays(
      expires_refresh_token_days,
    )

    console.log('refreshtokenexpiration = ', refresh_token_expires_date)
    const refresh_token = sign({ email }, secret_refresh_token, {
      subject: user.id,
      expiresIn: expires_in_refresh_token,
    })

    await this.usersTokensRepository.create({
      user_id: user.id,
      refresh_token,
      expires_date: refresh_token_expires_date,
    })

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
      refresh_token,
    }

    return tokenReturn
  }
}

export { AuthenticateUseCase }
