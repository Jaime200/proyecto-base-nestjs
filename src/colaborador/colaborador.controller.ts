import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express'
import { ColaboradorService } from './Services/colaborador.service';
import { CreateColaboradorDTO, UpdateColaboradorDTO } from './dto/colaborador.dto';
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Colaborador')
@Controller('colaborador')
export class ColaboradorController {

    
    constructor(
        private colaboradorService : ColaboradorService
    ){}

    @Get('')
    @HttpCode(HttpStatus.ACCEPTED)
    get(){
        return this.colaboradorService.fidAll()
    }
    
    
    @Get('getOne')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Res() response: Response){
        
        response.status(200).send({
            message: 'Product'
        })
    }
    

    @Post()
    create(@Body() payload: CreateColaboradorDTO){
        return {
            message : 'Accion de crear',
            payload
        }
    }
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, 
    @Body() payload: UpdateColaboradorDTO){
       return {
        id,
        payload
       }
    }

    @Delete(':id')
    delete(@Param('id') id:number) {
        return {
            id
        }
    }
}
