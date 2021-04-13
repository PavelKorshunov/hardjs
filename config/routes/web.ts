import { HomeController } from '../../src/Controller';

export default async (app) => {
    app.get('/', HomeController.index);
};
