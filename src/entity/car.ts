import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Xe {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    price: number;
    @Column({type: 'text'})
    company: string;
    @Column({type: 'text'})
    status: string
}
