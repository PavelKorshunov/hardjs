import { Express } from 'express';
import { Kernel } from '../src/Kernel';
import * as handlebars from 'express-handlebars';

export class Template {
    public init(app: Express): void {
        app.set('views', Kernel.templateFolder());
        app.engine(
            'hbs',
            handlebars({ defaultLayout: 'base', extname: '.hbs' }),
        );
        app.set('view engine', 'hbs');
    }
}
