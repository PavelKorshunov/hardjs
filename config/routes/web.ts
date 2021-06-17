export default async (app, controllers) => {
    const HomeController = controllers.get('HomeController');
    const DatabaseController = controllers.get('DatabaseController');

    app.get('/', HomeController.index);
    app.get('/database', DatabaseController.index);
};
