import { Seat } from "src/seats/entities/seat.entity";
import { Showtime } from "src/showtimes/entities/showtime.entity";
import { Theater } from "src/theaters/entities/theater.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('auditoriums')
export class Auditorium {
     @PrimaryGeneratedColumn()
  id: number;

  @Column()
  theaterId: number;

  @ManyToOne(() => Theater, theater => theater.auditoriums)
  theater: Theater;

  @Column({ length: 100 })
  name: string;

  @Column()
  totalSeats: number;

  @Column({
    type: 'enum',
    enum: ['STANDARD', 'IMAX', '3D', '4DX'],
    default: 'STANDARD'
  })
  screenType: string;

  @Column({ length: 50, nullable: true })
  soundSystem?: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Seat, seat => seat.auditorium)
  seats: Seat[];

  @OneToMany(() => Showtime, showtime => showtime.auditorium)
  showtimes: Showtime[];
}
