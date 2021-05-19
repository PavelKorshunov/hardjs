import router from '../config/routes';
import { Container } from '../core';
import { Kernel as BaseKernel } from '../core';

export class Kernel extends BaseKernel {
    public constructor() {
        super();
    }

    public initializeKernel() {
        Container.set('kernel', this);
    }

    public async loadRoute() {
        await router(this.app);
    }
}
