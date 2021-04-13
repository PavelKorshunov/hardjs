import { Express } from 'express';
import router from '../config/routes';

export class Router {
    private readonly app: Express;

    constructor(express: Express) {
        this.app = express;
    }

    public static create(app: Express): Router {
        return new Router(app);
    }

    public async init(): Promise<void> {
        await router(this.app);
    }
}
