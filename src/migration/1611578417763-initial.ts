import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1611578417763 implements MigrationInterface {
    name = 'initial1611578417763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item_enxoval" ("id" varchar PRIMARY KEY NOT NULL, "asin" varchar NOT NULL, "name" varchar NOT NULL, "imageUrl" varchar NOT NULL, "category" varchar NOT NULL DEFAULT ('-'), "imageWidth" integer NOT NULL, "imageHeight" integer NOT NULL, "price" integer NOT NULL, "available" boolean NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_e9437890a06b7566ca78e469ad2" UNIQUE ("asin"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "password" varchar NOT NULL, "email" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "item_enxoval"`);
    }

}
