import { Auditorium } from "src/auditoriums/entities/auditorium.entity";
import { Column, CreateDateColumn, Entity, OneToMany } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
@Entity(
'theaters'
)
export class Theater {
    @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column('text')
  address: string;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 100, nullable: true })
  state?: string;

  @Column({ length: 20, nullable: true })
  postalCode?: string;

  @Column({ length: 20, nullable: true })
  phone?: string;

  @Column({ length: 255, nullable: true })
  email?: string;

  @Column('json', { nullable: true })
  facilities?: Record<string, any>;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @OneToMany(() => Auditorium, auditorium => auditorium.theater)
  auditoriums: Auditorium[];
}
