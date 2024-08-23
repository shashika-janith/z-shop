import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {
    constructor(private userService: UsersService) {}

    @Get('filter')
    findAll() {
        return this.userService.findAll();
    }
}
