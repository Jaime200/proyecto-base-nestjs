import { Injectable, Inject } from '@nestjs/common';
import { COLABORADOR } from '../Entties/Colaborador.entity';
import { Client } from 'pg';
import { Repository } from 'typeorm';

@Injectable()
export class ColaboradorService {
    constructor(
        @Inject("PG") private pgClient: Client,
        @Inject("COLABORADOR_REPOSITORY") 
        private colaboradorRepository: Repository<COLABORADOR>,
    ){

    }
    private colaboradores : COLABORADOR[] = [
        {
            ID:1,
            PRIMER_NOMBRE : 'Jaime',
            SEGUNDO_NOMBRE: 'Iván',
            TERCER_NOMBRE: '',
            PRIMER_APELLIDO: 'Muñoz',
            SEGUNDO_APELLIDO: 'Enriquez',
            SEXO: 'M',
            IDENTIFICACION: '111',
            FECHA_NACIMIENTO: new Date('1991-11-13')

        }
    ]

    fidAll(){
        // return new Promise((resolve, reject )=> {
        //     return this.pgClient.query("SELECT * FROM COLABORADOR", (err, resp) =>{
        //         if(err) reject(err)
        //         else resolve(resp.rows)
        //     })
        // })
        return this.colaboradorRepository.find()
        
        
    }

    crate(payload:COLABORADOR){
        this.colaboradores.push({
            ID: this.colaboradores.length + 1,
            ...payload
        })
    }
}
