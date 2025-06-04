import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({ unique: true })
    email: string;
    @Column()
    password: string;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column({ enum: ['user', 'admin', 'theater_owner'], type: 'enum', default: 'user' })
    role: string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

}
