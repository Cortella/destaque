import { hash } from "bcrypt";
import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { inject, injectable } from "tsyringe";
import { z } from "zod";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { PROVIDERS, REPOSITORIES } from "@utils/utils";
import { REGEX } from "@utils/regex";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject(REPOSITORIES.USERS_REPOSITORY)
    private usersRepository: IUsersRepository,
    @inject(PROVIDERS.DATE_PROVIDER)
    private dateProvider: IDateProvider
  ) {}

  async execute({
    name,
    email,
    password,
    birthDate,
    confirmPassword,
  }: ICreateUserDTO): Promise<void> {
    const UserSchema = z
      .object({
        name: z
          .string()
          .min(3, "Nome precisa ter 3 ou mais caracteres")
          .max(50, "O nome deve ter no máximo 50 caracteres")
          .regex(
            REGEX.ONLY_LETTERS_AND_GRAFICH_SINALS,
            "O nome deve conter apenas letras"
          ),
        email: z.string().email("E-mail inválido"),
        password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
        confirmPassword: z.string(),
        birthDate: z
          .string()
          .regex(
           REGEX.DATE_FORMAT_YYYY_MM_DD,
            "Data de nascimento inválida"
          )
          .refine(
            (date) => {
              return !(
                this.dateProvider.compareInYears(new Date(date), new Date()) < 6
              );
            },
            { message: "Data de nascimento inválida" }
          ),
      })
      .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não conferem",
        path: ["confirmPassword"], // Mensagem será associada ao campo confirmPassword
      });

    try {
      UserSchema.parse({
        name,
        email,
        password,
        confirmPassword,
        birthDate,
      });

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
        birthDate,
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new AppError(error.errors[0].message, 400);
      }
      throw error;
    }
  }
}

export { CreateUserUseCase };
