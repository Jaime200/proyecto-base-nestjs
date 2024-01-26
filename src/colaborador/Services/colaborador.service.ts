import { Injectable } from '@nestjs/common';
import { COLABORADOR } from '../Entties/Colaborador.entity';

@Injectable()
export class ColaboradorService {
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
        return this.colaboradores
    }

    crate(payload:COLABORADOR){
        this.colaboradores.push({
            ID: this.colaboradores.length + 1,
            ...payload
        })
    }
}
