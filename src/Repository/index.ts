import { getCustomRepository } from 'typeorm';
import { UserRepository as UserRepositoryImpl } from './UserRepository';

export const UserRepository = getCustomRepository(UserRepositoryImpl);
