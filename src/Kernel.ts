import router from '../config/routes';
import { Kernel as BaseKernel } from '../core';

export class Kernel extends BaseKernel {
    public constructor() {
        super();
    }

    public initializeKernel() {
        this.container.set('kernel', this);
    }

    public async loadRoute() {
        await router(this.app);
    }
}
