import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject() private usersService: UsersService,
        @Inject() private jwtService: JwtService,
    ) {}

    async login(
        username: string,
        pass: string,
    ): Promise<{ access_token: string }> {
        const user = await this.usersService.findOne(username);

        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.userId, username: user.username };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(dto: RegisterDto): Promise<User> {
        return this.usersService.register(dto);
    }
}
