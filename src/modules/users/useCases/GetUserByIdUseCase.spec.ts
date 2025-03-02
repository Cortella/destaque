import 'reflect-metadata'
import { describe, expect, it, beforeEach } from 'vitest'
import { hash } from 'bcrypt'
import { InMemoryUsersRepository } from '@modules/users/repositories/in-memory/InMemoryUsersRepository'
import { AppError } from '@shared/errors/AppError'
import { GetUserByIdUseCase } from './GetUserByIdUseCase'

let usersRepository: InMemoryUsersRepository
let sut: GetUserByIdUseCase

describe('GetUserById Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()

    sut = new GetUserByIdUseCase(usersRepository)
  })

  it('should be able to get a specific user', async () => {
    const user = await usersRepository.create({
      id: '123',
      email: 'teste@example.com',
      password: '123456',
      name: 'Teste',
      birthDate: new Date(),
    })

    const userGet = await sut.execute(user.id)
    expect(userGet?.id).toEqual(expect.any(String))
  })

  it('should not be alble to get user by id', async () => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUserByIdUseCase(usersRepository)

    await expect(async () => sut.execute('123')).rejects.toBeInstanceOf(
      AppError,
    )
  })
})
