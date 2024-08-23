import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductForCreateDto } from './dto/product-for-create.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get('filter')
    findAll() {
        return this.productService.findAll();
    }

    @HttpCode(HttpStatus.OK)
    @Post('create')
    create(@Body() dto: ProductForCreateDto) {
        return this.productService.create(dto);
    }
}
