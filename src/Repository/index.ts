import { UserRepository as UserRepositoryImpl } from './UserRepository';

export const UserRepository = new UserRepositoryImpl().get();
