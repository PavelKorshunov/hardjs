import { HomeController } from '../../src/Controller';
import { DatabaseController } from '../../src/Controller';

/*
 TODO необходимо избавиться от импорта контроллеров
 поскольку импорт выполняет код, а это значит что
 инициализация контроллеров будет выполнена до всех действий в ядре Kernel
 */

export default async (app) => {
    app.get('/', HomeController.index);
    app.get('/database', DatabaseController.index);
};
