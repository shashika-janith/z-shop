import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Logger,
    Param,
    Post,
    Put,
} from '@nestjs/common';
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
    @Post()
    create(@Body() dto: ProductForCreateDto) {
        return this.productService.create(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: ProductForCreateDto) {
        return this.productService.update(+id, dto);
    }
}
