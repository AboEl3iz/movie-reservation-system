import { Showtime } from "src/showtimes/entities/showtime.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('reservations')
export class Reservation {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number; // This assumes a `users` table exists

  @Column()
  showtimeId: number;

  @ManyToOne(() => Showtime)
  showtime: Showtime;

  @Column({ length: 20, unique: true })
  reservationCode: string;

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmount: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  bookingFee: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  discountAmount: number;

  @Column('decimal', { precision: 10, scale: 2 })
  finalAmount: number;

  @Column({
    type: 'enum',
    enum: ['PENDING', 'COMPLETED', 'FAILED', 'REFUNDED'],
    default: 'PENDING'
  })
  paymentStatus: string;

  @Column({
    type: 'enum',
    enum: ['CONFIRMED', 'CANCELLED', 'EXPIRED'],
    default: 'CONFIRMED'
  })
  reservationStatus: string;

  @Column({ length: 50, nullable: true })
  paymentMethod?: string;

  @Column({
    type: 'enum',
    enum: ['WEB', 'MOBILE', 'COUNTER'],
    default: 'WEB'
  })
  bookingSource: string;

  @Column({ type: 'timestamp', nullable: true })
  expiresAt?: Date;

  @CreateDateColumn()
  createdAt: Date;
}
