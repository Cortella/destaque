export interface ICreateUserDTO {
  id?: string;
  name: string;
  username: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  avatar?: string;
}
