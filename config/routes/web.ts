import { HomeController } from '../../src/Controller';
import { DatabaseController } from '../../src/Controller';

export default async (app) => {
    app.get('/', HomeController.index);
    app.get('/database', DatabaseController.index);
};
