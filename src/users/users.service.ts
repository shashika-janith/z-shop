import { Inject, Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';

export type UserModel = {
    userId: number;
    username: string;
    password: string;
};

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {}

    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'Abcd1234',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'Abcd5678',
        },
    ];

    async findOne(username: string): Promise<UserModel | undefined> {
        return this.users.find((user) => user.username === username);
    }

    async findAll(): Promise<UserModel[]> {
        return this.users;
    }

    async register(dto: RegisterDto): Promise<User> {
        const user = new User();
        user.email = dto.email;
        user.firstName = dto.firstName;
        user.lastName = dto.lastName;

        return this.userRepository.save(user);
    }
}
