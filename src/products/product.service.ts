import { Inject, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductForCreateDto } from './dto/product-for-create.dto';
import { Status } from 'src/enums/status.enum';

export class ProductService {
    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private productRepository: Repository<Product>,
    ) {}

    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async create(dto: ProductForCreateDto): Promise<Product> {
        try {
            const product = new Product();
            product.name = dto.name;
            product.description = dto.description;
            product.price = dto.price;
            product.quantity = dto.quantity;
            product.category = dto.category;
            product.status = dto.status ?? Status.ACTIVE;

            return this.productRepository.save(product);
        } catch (error) {
            Logger.error(error);
        }
    }

    async update(id: number, dto: ProductForCreateDto): Promise<Product> {
        try {
            const product = await this.productRepository.findOneBy({ id });
            Logger.log(product);
            product.name = dto.name;
            product.description = dto.description;
            product.price = dto.price;
            product.quantity = dto.quantity;
            product.category = dto.category;
            product.status = dto.status ?? Status.ACTIVE;

            return this.productRepository.save(product);
        } catch (error) {
            Logger.error(error);
        }
    }
}
