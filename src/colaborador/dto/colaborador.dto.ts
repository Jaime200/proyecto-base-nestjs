import { PartialType } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDate, IsNotEmpty, IsString } from 'class-validator'


export class CreateColaboradorDTO {

    @IsString()
    readonly PRIMER_NOMBRE: string

    @IsString()
    readonly SEGUNDO_NOMBRE: string

    @IsString()
    readonly TERCER_NOMBRE : string

    @IsString()
    readonly PRIMER_APELLIDO: string

    @IsString()
    readonly SEGUNDO_APELLIDO: string

    @IsString()
    readonly SEXO: string

    @IsString()
    readonly IDENTIFICACION: string

    @IsDate()
    @Type(() => Date)
    @IsNotEmpty()
    readonly FECHA_NACIMIENTO: Date
}

export class UpdateColaboradorDTO 
extends PartialType(CreateColaboradorDTO){}