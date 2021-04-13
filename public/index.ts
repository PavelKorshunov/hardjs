import { Kernel } from '../src/Kernel';

(async () => {
    const kernel = await new Kernel().handle(true);
    kernel.listen(3000);
})();
