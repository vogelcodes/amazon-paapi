import {MigrationInterface, QueryRunner} from "typeorm";

export class itemEnxovalAvailability1611427092846 implements MigrationInterface {
    name = 'itemEnxovalAvailability1611427092846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_itemEnxoval" ("id" varchar PRIMARY KEY NOT NULL, "asin" varchar NOT NULL, "name" varchar NOT NULL, "price" integer NOT NULL, "available" boolean NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_itemEnxoval"("id", "asin", "name", "price") SELECT "id", "asin", "name", "price" FROM "itemEnxoval"`);
        await queryRunner.query(`DROP TABLE "itemEnxoval"`);
        await queryRunner.query(`ALTER TABLE "temporary_itemEnxoval" RENAME TO "itemEnxoval"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itemEnxoval" RENAME TO "temporary_itemEnxoval"`);
        await queryRunner.query(`CREATE TABLE "itemEnxoval" ("id" varchar PRIMARY KEY NOT NULL, "asin" varchar NOT NULL, "name" varchar NOT NULL, "price" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "itemEnxoval"("id", "asin", "name", "price") SELECT "id", "asin", "name", "price" FROM "temporary_itemEnxoval"`);
        await queryRunner.query(`DROP TABLE "temporary_itemEnxoval"`);
    }

}
