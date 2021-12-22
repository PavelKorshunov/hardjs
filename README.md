# Hardjs

Hardjs micro-framework TypeScript starter repository.

# Installation

```bash
$ npm install
```

# Running the app

```bash
# watch mode (open 2 terminal)
$ npm run dev
$ tsc -w

# production mode
$ npm run start
```

# Running the application on the server

To run on the server:

```bash
$ pm2 start process.yaml --env production
```

# Running from Docker

We start migrations, change **config/database.ts** file and launch docker:

```bash
$ docker-compose up -d --build --force-recreate
```

# Migrations

Help:

```bash
$ npx typeorm -h
$ npx typeorm migration:run -h
$ npx typeorm migration:create -h
```

Create migration file:

```bash
$ npx typeorm migration:create -n Post -d src/Migrations
```

To perform migrations, you need to:

**config/database.ts** change from **export const database =** to **export default** and run command:

```bash
$ tsc
$ npx typeorm migration:run -f dist/config/database.js
```
