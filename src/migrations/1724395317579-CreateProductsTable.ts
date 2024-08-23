import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProductsTable1724395317579 implements MigrationInterface {
    private table = new Table({
        name: 'products',
        columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true, // Auto-increment
                generationStrategy: 'increment',
            },
            {
                name: 'name',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'price',
                type: 'decimal',
                precision: 10,
            },
            {
                name: 'description',
                type: 'text',
            },
            {
                name: 'category',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'quantity',
                type: 'integer',
            },
            {
                name: 'status',
                type: 'boolean',
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
            }
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable(this.table);
    }
}
