export interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  birthDate: Date;
  confirmPassword?: string;
  isAdmin?: boolean;
  avatar?: string;
}
