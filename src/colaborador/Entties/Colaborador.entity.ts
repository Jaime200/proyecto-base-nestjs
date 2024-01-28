import {  PrimaryGeneratedColumn 
, Column
,Entity
} from 'typeorm'

@Entity()
export class COLABORADOR {
    @PrimaryGeneratedColumn()
    ID: number

    @Column( {type : 'varchar', length: 50, nullable: false})
    PRIMER_NOMBRE: string

    @Column( {type : 'varchar', length: 50})
    SEGUNDO_NOMBRE: string

    @Column( {type : 'varchar', length: 50})
    TERCER_NOMBRE : string

    @Column( {type : 'varchar', length: 50, nullable: false})
    PRIMER_APELLIDO: string

    @Column( {type : 'varchar', length: 50})
    SEGUNDO_APELLIDO: string

    @Column( {type : 'varchar', length: 2})
    SEXO: string

    @Column( {type : 'varchar', length: 50})
    IDENTIFICACION: string

    @Column( {type : 'timestamp'})
    FECHA_NACIMIENTO: Date
}