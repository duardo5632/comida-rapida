import { User } from "../entities/user";
export interface UserRepository {
  login(name: string, password: string): Promise<User | null>;
}
