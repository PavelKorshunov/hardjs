import { User } from '../Entity/User';
import { EntityRepository, Repository, getCustomRepository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    public get() {
        return getCustomRepository(User);
    }
}
