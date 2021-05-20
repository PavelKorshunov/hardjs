import { User } from '../Entity/User';
import { getManager } from 'typeorm';

export class DatabaseController {
    public async index(req, res) {
        const entityManager = getManager();
        const user = await entityManager.findOne(User, 1);
        console.log(user);
        return res.send('dsdsd');
    }
}
