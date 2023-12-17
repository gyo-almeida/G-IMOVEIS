import { MigrationInterface, QueryRunner } from "typeorm";

export class createEntities1677697995278 implements MigrationInterface {
    name = 'createEntities1677697995278'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "street" character varying(45) NOT NULL, "zipCode" character varying(8) NOT NULL, "number" character varying(6), "city" character varying(20) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "real_estate" ("id" SERIAL NOT NULL, "sold" boolean NOT NULL DEFAULT false, "value" numeric(12,2) NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressIdId" integer, CONSTRAINT "REL_042b94dd5200d5cd66a6277878" UNIQUE ("addressIdId"), CONSTRAINT "PK_8735a23fd5adc2afb18242894ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "admin" boolean NOT NULL, "password" character varying(120) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedules_users_properties" ("id" SERIAL NOT NULL, "date" date NOT NULL, "hour" TIME NOT NULL, "userIdId" integer, CONSTRAINT "REL_3c99851037061d5508bb415616" UNIQUE ("userIdId"), CONSTRAINT "PK_751450246dee9abc82a47dabc4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_042b94dd5200d5cd66a6277878b" FOREIGN KEY ("addressIdId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_3c99851037061d5508bb415616d" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_3c99851037061d5508bb415616d"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_042b94dd5200d5cd66a6277878b"`);
        await queryRunner.query(`DROP TABLE "schedules_users_properties"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "real_estate"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
