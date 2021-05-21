import { User } from '../Entity/User';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    // TODO repository
}
