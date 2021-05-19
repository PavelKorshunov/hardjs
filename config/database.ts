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
        entities: ['src/Entity/**/*.js'],
        migrations: ['src/Migrations/**/*.js'],
    },
];
