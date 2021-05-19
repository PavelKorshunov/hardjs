import { User } from '../Entity/User';
import { getRepository } from 'typeorm';

export class UserRepository {
    constructor(props) {
        getRepository(User);
    }
}
