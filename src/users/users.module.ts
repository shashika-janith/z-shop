import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/repository/database.module';
import { userProviders } from './user.providers';
import { UserController } from './user.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [
        ...userProviders, 
        UsersService
    ],
    exports: [UsersService],
})
export class UsersModule {}
