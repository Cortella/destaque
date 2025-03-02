import 'reflect-metadata'
import { describe, expect, it, beforeEach } from 'vitest'
import { hash } from 'bcrypt'
import { InMemoryUsersRepository } from '@modules/users/repositories/in-memory/InMemoryUsersRepository'
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider'
import { AppError } from '@shared/errors/AppError'
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider'
import { CreateUserUseCase } from './CreateUserUseCase'

let usersRepository: InMemoryUsersRepository
let dateProvider: IDateProvider
let sut: CreateUserUseCase

describe('Register Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()

    dateProvider = new DayjsDateProvider()
    sut = new CreateUserUseCase(usersRepository, dateProvider)
  })

  it('should be able to register user', async () => {
    const user = await sut.execute({
      email: 'jE2wZ@example.com',
      name: 'John Doe',
      password: '12345678',
      confirmPassword: '12345678',
      birthDate: new Date('2018-02-03'),
      isAdmin: false,
    })
    console.log('user = ', user)
    expect(user?.id).toEqual(expect.any(String))
  })

  it('should not be alble to register with same email twice', async () => {
    usersRepository = new InMemoryUsersRepository()
    sut = new CreateUserUseCase(usersRepository, dateProvider)

    const email = 'johndoe@example.com'
    await sut.execute({
      email,
      name: 'John Doe',
      password: '12345678',
      confirmPassword: '12345678',
      birthDate: new Date('2018-02-03'),
      isAdmin: false,
    })

    await expect(async () =>
      sut.execute({
        email,
        name: 'John Doe',
        password: '123456789',
        confirmPassword: '123456789',
        birthDate: new Date('2018-02-03'),
        isAdmin: false,
      }),
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create user', async () => {
    await expect(async () =>
      sut.execute({
        email: 'j2@example.com',
        name: 'John Doe',
        password: await hash('123456', 6),
        birthDate: new Date(),
        isAdmin: false,
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
