import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/repository/database.module';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productProviders } from './product.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [
    ...productProviders,
    ProductService,
  ],
})
export class ProductModule {}