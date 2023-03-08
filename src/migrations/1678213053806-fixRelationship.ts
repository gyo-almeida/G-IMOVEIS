import { MigrationInterface, QueryRunner } from "typeorm";

export class fixRelationship1678213053806 implements MigrationInterface {
    name = 'fixRelationship1678213053806'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_042b94dd5200d5cd66a6277878b"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_3c99851037061d5508bb415616d"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "REL_042b94dd5200d5cd66a6277878"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "addressIdId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "REL_3c99851037061d5508bb415616"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "userIdId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "UQ_44ae17efa35575b6a6f83b35ee5" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "realEstateId" integer`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "number" character varying(7)`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_e64472d578faf91bee90a06ecc0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_9ea44d2d89def175ed9db8ccf3f" FOREIGN KEY ("realEstateId") REFERENCES "real_estate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_6b07764ec82685efb66e5629845" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_6b07764ec82685efb66e5629845"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_9ea44d2d89def175ed9db8ccf3f"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "number" character varying(6)`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "realEstateId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "UQ_44ae17efa35575b6a6f83b35ee5"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "userIdId" integer`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "REL_3c99851037061d5508bb415616" UNIQUE ("userIdId")`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "addressIdId" integer`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "REL_042b94dd5200d5cd66a6277878" UNIQUE ("addressIdId")`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_3c99851037061d5508bb415616d" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_042b94dd5200d5cd66a6277878b" FOREIGN KEY ("addressIdId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
