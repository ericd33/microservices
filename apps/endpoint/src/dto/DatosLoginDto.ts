import { IsNotEmpty } from "class-validator";

export class DatosLoginDto {
    @IsNotEmpty()
    usuario: string;
    @IsNotEmpty()
    password: string;
}