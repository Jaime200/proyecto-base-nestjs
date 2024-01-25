import { Module } from '@nestjs/common';
import { ColaboradorService } from './Services/colaborador.service';
import { ColaboradorController } from './colaborador.controller';

@Module({
    imports: [],
    controllers: [ColaboradorController],
    providers: [ColaboradorService],
    exports : [ColaboradorService]
})
export class ColaboradorModule {}
