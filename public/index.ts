import * as express from 'express';
import { Kernel } from '../src/Kernel';

const kernel = new Kernel(express());
kernel.run(3000);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
//
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });
