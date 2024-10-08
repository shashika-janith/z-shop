import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1724319336229 implements MigrationInterface {
    private table = new Table({
        name: 'users',
        columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true, // Auto-increment
                generationStrategy: 'increment',
            },
            {
                name: 'email',
                type: 'varchar',
                length: '255',
                isUnique: true,
                isNullable: false,
            },
            {
                name: 'first_name',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'last_name',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'created_at',
                type: 'timestamp',
                isNullable: false,
                default: 'now()',
            },
            {
                name: 'updated_at',
                type: 'timestamp',
                isNullable: false,
                default: 'now()',
            },
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable(this.table);
    }
}
