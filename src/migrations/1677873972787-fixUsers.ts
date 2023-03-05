import { MigrationInterface, QueryRunner } from "typeorm";

export class fixUsers1677873972787 implements MigrationInterface {
    name = 'fixUsers1677873972787'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" DROP DEFAULT`);
    }

}
