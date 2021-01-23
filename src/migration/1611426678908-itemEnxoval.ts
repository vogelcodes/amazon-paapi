import {MigrationInterface, QueryRunner} from "typeorm";

export class itemEnxoval1611426678908 implements MigrationInterface {
    name = 'itemEnxoval1611426678908'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "itemEnxoval" ("id" varchar PRIMARY KEY NOT NULL, "asin" varchar NOT NULL, "name" varchar NOT NULL, "price" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "itemEnxoval"`);
    }

}
