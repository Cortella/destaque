import { ICreateUserTokenDTO } from '@modules/users/dtos/ICreateUserTokenDTO'
import { UserTokens } from '@modules/users/infra/typeorm/entities/UserToken'

import { IUsersTokensRepository } from '../IUsersTokensrepository'

class InMemoryUsersTokensRepository implements IUsersTokensRepository {
  usersTokens: UserTokens[] = []

  async create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = new UserTokens()

    Object.assign(userToken, {
      expires_date,
      refresh_token,
      user_id,
    })

    this.usersTokens.push(userToken)

    return userToken
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<UserTokens> {
    const userToken = this.usersTokens.find(
      (ut) => ut.user_id === user_id && ut.refresh_token && refresh_token,
    )
    return userToken
  }

  async deleteById(id: string): Promise<void> {
    const userToken = this.usersTokens.find((ut) => ut.id === id)
    this.usersTokens.splice(this.usersTokens.indexOf(userToken))
  }

  async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
    const userToken = this.usersTokens.find(
      (ut) => ut.refresh_token === refresh_token,
    )
    return userToken
  }
}

export { InMemoryUsersTokensRepository }
