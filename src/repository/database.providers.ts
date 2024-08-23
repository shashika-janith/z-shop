import { Order } from 'src/order/order.entity';
import { Product } from 'src/products/product.entity';
import { User } from 'src/users/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'ecommerce',
                entities: [User, Product, Order],
            });

            return dataSource.initialize();
        },
    },
];
