import { Logger } from "@nestjs/common";
import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1724312784772 implements MigrationInterface {
    private readonly logger = new Logger(Init1724312784772.name);

    public async up(queryRunner: QueryRunner): Promise<void> {
        this.logger.log('Migration up');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        this.logger.log('Migration down');
    }

}
