import { UserRepository } from '../Repository';

export class DatabaseController {
    public async index(req, res) {
        const user = await UserRepository.findOne(1);
        return res.send(user);
    }
}
