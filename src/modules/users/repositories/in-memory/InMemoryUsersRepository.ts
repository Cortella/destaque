import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'
import { User } from '@modules/users/infra/typeorm/entities/User'
import { randomUUID } from 'node:crypto'
import { IUsersRepository } from '../IUsersRepository'

class InMemoryUsersRepository implements IUsersRepository {
  public items: User[] = []

  async create(data: ICreateUserDTO): Promise<User> {
    const user = {
      id: randomUUID(),
      email: data?.email,
      birthDate: data?.birthDate,
      name: data?.name,
      password: data?.password,
      isAdmin: data?.isAdmin,
      created_at: new Date(),
      player: null,
    }
    this.items.push(user)
    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((item) => item.email === email)
    if (!user) return null

    return user
  }

  async findById(userId: string): Promise<User | null> {
    const user = this.items.find((item) => item.id === userId)

    if (!user) return null

    return user
  }
}

export { InMemoryUsersRepository }
