import { Kernel } from '../src/Kernel';

(async () => {
    const kernel = await new Kernel().handle();
    kernel.enableViews();
    kernel.listen(3000);
})();
