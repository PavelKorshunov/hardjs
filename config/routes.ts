import web from './routes/web';

export default async (app, controllers) => {
    await web(app, controllers);
};
