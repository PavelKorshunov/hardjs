import router from '../config/routes';
import { Container } from '../core/dependency';
import { Kernel as BaseKernel } from '../core/Kernel';

export class Kernel extends BaseKernel {
    constructor() {
        super();
    }

    public initializeKernel() {
        Container.set('kernel', this);
    }

    public async loadRoute() {
        await router(this.app);
    }
}
