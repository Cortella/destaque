import 'reflect-metadata'
import { describe, expect, it, beforeEach } from 'vitest'
import { hash } from 'bcrypt'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'
import { InMemoryUsersRepository } from '@modules/users/repositories/in-memory/InMemoryUsersRepository'
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider'
import { InMemoryUsersTokensRepository } from '@modules/users/repositories/in-memory/InMemoryUsersTokensRepository'
import { AppError } from '@shared/errors/AppError'
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider'

let usersRepository: InMemoryUsersRepository
let usersTokenRepository: InMemoryUsersTokensRepository
let dateProvider: IDateProvider
let sut: AuthenticateUserUseCase

describe('Authenticate Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    usersTokenRepository = new InMemoryUsersTokensRepository()
    dateProvider = new DayjsDateProvider()
    sut = new AuthenticateUserUseCase(
      usersRepository,
      usersTokenRepository,
      dateProvider,
    )
  })

  it('should be able to authenticate', async () => {
    await usersRepository.create({
      email: 'jE2wZ@example.com',
      name: 'John Doe',
      password: await hash('123456', 6),
      birthDate: new Date(),
      isAdmin: false,
    })
    const { user } = await sut.execute({
      email: 'jE2wZ@example.com',
      password: '123456',
    })

    expect(user?.email).toEqual(expect.any(String))
  })

  it('should not be able to authenticate with wrong email', async () => {
    await expect(() =>
      sut.execute({
        email: 'jE2@example.com',
        password: '12345',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to authenticate with wrong password', async () => {
    await usersRepository.create({
      email: 'jE2wZ@example.com',
      name: 'John Doe',
      birthDate: new Date(),
      password: await hash('123456', 6),
    })

    await expect(
      sut.execute({
        email: 'jE2wZ@example.com',
        password: 'wrongpassword',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
