import * as express from 'express';
import { Router } from '../core/Router';
import { Template } from '../core/Template';
import { dirname, sep } from 'path';

export class Kernel {
    protected app;
    public static folders = {
        templates: 'templates',
    };

    constructor() {
        this.app = express();
    }

    public async handle(viewEngine?: boolean): Promise<Kernel> {
        this.app.disable('x-powered-by');
        await Router.create(this.app).init();
        if (viewEngine) new Template().init(this.app);
        return this;
    }

    public listen(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server app listening at http://localhost:${port}`);
        });
    }

    public static templateFolder(): string {
        return dirname(__dirname) + sep + '..' + sep + this.folders.templates;
    }
}
