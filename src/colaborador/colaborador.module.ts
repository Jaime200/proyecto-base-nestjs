import { Module } from '@nestjs/common';
import { ColaboradorService } from './Services/colaborador.service';
import { ColaboradorController } from './colaborador.controller';
import { DataSource } from 'typeorm';
import { COLABORADOREntity } from './Entties/Colaborador.entity';

@Module({
    imports: [],
    controllers: [ColaboradorController],
    providers: [
        {
            provide: 'COLABORADOR_REPOSITORY',
            useFactory: (dataSource: DataSource) => dataSource.getRepository(COLABORADOREntity),
            inject: ['context']
        },
        ColaboradorService],
    exports : [ColaboradorService]
})
export class ColaboradorModule {}
