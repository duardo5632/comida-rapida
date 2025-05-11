import { validateUserLogin } from "../validators/validateUserLogin";
import { UserRepository } from "../../domain/repositories/UserRepository";

export const loginUser = async (
  name: string,
  password: string,
  userRepo: UserRepository
) => {
  validateUserLogin({ name, password });
  return await userRepo.login(name, password);
};
