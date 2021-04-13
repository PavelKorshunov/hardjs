import web from './routes/web';

export default async (app) => {
    await web(app);
};
