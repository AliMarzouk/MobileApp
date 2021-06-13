import {IsNotEmpty} from "class-validator";

export class LoginSocialDto {
    @IsNotEmpty()
    genderType: number;
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    facebookId: string;
    @IsNotEmpty()
    appleId: string;
    @IsNotEmpty()
    birthDate: string;
}
