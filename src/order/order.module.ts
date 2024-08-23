import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { orderProviders } from './order.providers';
import { DatabaseModule } from 'src/repository/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [
      ...orderProviders, 
      OrderService
    ],
    controllers: [OrderController],
})
export class OrderModule {}
