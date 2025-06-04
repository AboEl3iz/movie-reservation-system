import { Reservation } from "src/reservations/entities/reservation.entity";
import { Seat } from "src/seats/entities/seat.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('reserved_seats')
export class ReservedSeat {
     @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reservationId: number;

  @ManyToOne(() => Reservation)
  reservation: Reservation;

  @Column()
  seatId: number;

  @ManyToOne(() => Seat)
  seat: Seat;

  @Column('decimal', { precision: 10, scale: 2 })
  ticketPrice: number;

  @Column({
    type: 'enum',
    enum: ['RESERVED', 'OCCUPIED', 'CANCELLED'],
    default: 'RESERVED'
  })
  seatStatus: string;
}
