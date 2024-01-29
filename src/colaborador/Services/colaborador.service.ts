import { Injectable, Inject } from '@nestjs/common';
import { COLABORADOREntity } from '../Entties/Colaborador.entity';
import { Client } from 'pg';
import { Repository } from 'typeorm';
import { CreateColaboradorDTO, UpdateColaboradorDTO } from '../dto/colaborador.dto';

@Injectable()
export class ColaboradorService {
    constructor(
        @Inject("PG") private pgClient: Client,
        @Inject("COLABORADOR_REPOSITORY") 
        private colaboradorRepository: Repository<COLABORADOREntity>,
    ){

    }
   

    fidAll(){
        // return new Promise((resolve, reject )=> {
        //     return this.pgClient.query("SELECT * FROM COLABORADOR", (err, resp) =>{
        //         if(err) reject(err)
        //         else resolve(resp.rows)
        //     })
        // })
        return this.colaboradorRepository.find()
        
        
    }

    crate(payload:CreateColaboradorDTO){
       const newColaborador = this.colaboradorRepository.create(payload);
       return this.colaboradorRepository.save(newColaborador);
    }
    
    async update(ID: number, changes: UpdateColaboradorDTO){
        const colaborador = await this.colaboradorRepository.findOneBy({ ID : ID });
        this.colaboradorRepository.merge(colaborador,changes);
        return this.colaboradorRepository.save(colaborador);
    }

    async remove(ID: number){
        const colaborador = await this.colaboradorRepository.findOneBy({ ID : ID });
        this.colaboradorRepository.merge(colaborador, { ESTADO: 0 });
        this.colaboradorRepository.save(colaborador);
    }
}
