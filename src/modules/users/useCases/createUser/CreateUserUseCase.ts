import { hash } from "bcrypt";
import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { REPOSITORY } from "@utils/utils";


@injectable()
class CreateUserUseCase {
  constructor(
    @inject(REPOSITORY.USERS_REPOSITORY)
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    birthDate,
    confirmPassword
  }: ICreateUserDTO): Promise<void> {

    if(password !== confirmPassword) 
      throw new AppError("Senhas não conferem")
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User Already Exists");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      confirmPassword,
      birthDate
    });
  }
}

export { CreateUserUseCase };
