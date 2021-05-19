import { dirname } from 'path';
import { Kernel } from '../src/Kernel';

(async () => {
    const kernel = await new Kernel().setAppRoot(dirname(__dirname)).handle();
    kernel.listen(3000);
})();
