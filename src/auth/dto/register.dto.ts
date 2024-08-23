import { IsNotEmpty } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;
}
