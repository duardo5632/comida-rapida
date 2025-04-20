export interface UserRepository {
    login(name: string, password: string): Promise<boolean>;
  }