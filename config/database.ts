export const database = [
    {
        name: 'default',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'example',
        database: 'example',
        synchronize: false,
        logging: false,
        entities: [__dirname + '/../src/Entity/**/*.js'],
        migrations: [__dirname + '/../src/Migrations/**/*.js'],
        cli: {
            migrationsDir: __dirname + '/../src/Migrations',
            entitiesDir: __dirname + '/../src/Entity',
            subscribersDir: __dirname + '/../src/Subscriber',
        },
    },
];
