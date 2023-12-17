import { MigrationInterface, QueryRunner } from "typeorm";

export class fixRealEstate1677869348592 implements MigrationInterface {
    name = 'fixRealEstate1677869348592'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" DROP DEFAULT`);
    }

}
