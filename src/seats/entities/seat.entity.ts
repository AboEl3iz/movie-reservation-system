import { Auditorium } from "src/auditoriums/entities/auditorium.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Seat {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  auditoriumId: number;

  @ManyToOne(() => Auditorium, auditorium => auditorium.seats)
  auditorium: Auditorium;

  @Column({ length: 5 })
  rowNumber: string;

  @Column()
  seatNumber: number;

  @Column({
    type: 'enum',
    enum: ['STANDARD', 'PREMIUM', 'VIP', 'RECLINER'],
    default: 'STANDARD'
  })
  seatType: string;

  @Column({ default: true })
  isActive: boolean;
}
