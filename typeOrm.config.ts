import { Product } from "./src/products/product.entity";
import { User } from "./src/users/user.entity";
import { DataSource } from "typeorm";

export default new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'ecommerce',
    entities: [User, Product],
    migrations: ['./src/migrations/*.ts'],
});
