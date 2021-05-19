import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1621432747210 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "users" ( id SERIAL PRIMARY KEY, name CHARACTER VARYING(255) );`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users";`);
    }
}
