import {MigrationInterface, QueryRunner} from "typeorm";

export class productUrl1611597310070 implements MigrationInterface {
    name = 'productUrl1611597310070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_item_enxoval" ("id" varchar PRIMARY KEY NOT NULL, "asin" varchar NOT NULL, "name" varchar NOT NULL, "imageUrl" varchar NOT NULL, "category" varchar NOT NULL DEFAULT ('-'), "imageWidth" integer NOT NULL, "imageHeight" integer NOT NULL, "price" integer NOT NULL, "available" boolean NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "productUrl" varchar NOT NULL DEFAULT ('https://amazon.com.br'), CONSTRAINT "UQ_e9437890a06b7566ca78e469ad2" UNIQUE ("asin"))`);
        await queryRunner.query(`INSERT INTO "temporary_item_enxoval"("id", "asin", "name", "imageUrl", "category", "imageWidth", "imageHeight", "price", "available", "createdAt", "updatedAt") SELECT "id", "asin", "name", "imageUrl", "category", "imageWidth", "imageHeight", "price", "available", "createdAt", "updatedAt" FROM "item_enxoval"`);
        await queryRunner.query(`DROP TABLE "item_enxoval"`);
        await queryRunner.query(`ALTER TABLE "temporary_item_enxoval" RENAME TO "item_enxoval"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item_enxoval" RENAME TO "temporary_item_enxoval"`);
        await queryRunner.query(`CREATE TABLE "item_enxoval" ("id" varchar PRIMARY KEY NOT NULL, "asin" varchar NOT NULL, "name" varchar NOT NULL, "imageUrl" varchar NOT NULL, "category" varchar NOT NULL DEFAULT ('-'), "imageWidth" integer NOT NULL, "imageHeight" integer NOT NULL, "price" integer NOT NULL, "available" boolean NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_e9437890a06b7566ca78e469ad2" UNIQUE ("asin"))`);
        await queryRunner.query(`INSERT INTO "item_enxoval"("id", "asin", "name", "imageUrl", "category", "imageWidth", "imageHeight", "price", "available", "createdAt", "updatedAt") SELECT "id", "asin", "name", "imageUrl", "category", "imageWidth", "imageHeight", "price", "available", "createdAt", "updatedAt" FROM "temporary_item_enxoval"`);
        await queryRunner.query(`DROP TABLE "temporary_item_enxoval"`);
    }

}
