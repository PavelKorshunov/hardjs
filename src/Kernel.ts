import { Express } from 'express';

export class Kernel {
    private server: Express;

    constructor(server: Express) {
        this.server = server;
    }

    public run(port: number): void {
        this.listen(port);
    }

    protected listen(port: number) {
        this.server.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
    }
}
