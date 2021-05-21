export const database = [
    {
        name: 'default',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'secret',
        database: 'express',
        synchronize: false,
        logging: false,
        entities: [__dirname + '/../src/Entity/**/*.js'],
        migrations: [__dirname + '/../src/Migrations/**/*.js'],
    },
];
