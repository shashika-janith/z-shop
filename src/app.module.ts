import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './products/product.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        AuthModule,
        UsersModule,
        ProductModule,
        HealthModule,
        OrderModule,
    ],
})
export class AppModule {}
