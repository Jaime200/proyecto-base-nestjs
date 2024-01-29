import {  PrimaryGeneratedColumn 
, Column
,Entity,
CreateDateColumn,
UpdateDateColumn
} from 'typeorm'

@Entity('COLABORADOR')
export class COLABORADOREntity {
    @PrimaryGeneratedColumn()
    ID: number

    @Column( {type : 'varchar', length: 50 ,nullable: false})
    PRIMER_NOMBRE: string

    @Column( {type : 'varchar', length: 50, nullable: true})
    SEGUNDO_NOMBRE: string

    @Column( {type : 'varchar', length: 50, nullable: true})
    TERCER_NOMBRE : string

    @Column( {type : 'varchar', length: 50, nullable: false})
    PRIMER_APELLIDO: string

    @Column( {type : 'varchar', length: 50, nullable: true})
    SEGUNDO_APELLIDO: string

    @Column( {type : 'varchar', length: 2})
    SEXO: string

    @Column( {type : 'varchar', length: 50})
    IDENTIFICACION: string

    @Column( {type : 'timestamp'})
    FECHA_NACIMIENTO: Date

    @Column({ type: 'int', default : 1 })
    ESTADO : number

    @Column({type: 'timestamp'})
    @CreateDateColumn()
    FECHA_CREACION

    @Column({type: 'timestamp'})
    @UpdateDateColumn()
    FECHA_MODIFICACION
}