import { Auditorium } from "src/auditoriums/entities/auditorium.entity";
import { Movie } from "src/movies/entities/movie.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('showtimes')
export class Showtime {
     @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movieId: number;

  @Column()
  auditoriumId: number;

  @ManyToOne(() => Movie)
  movie: Movie;

  @ManyToOne(() => Auditorium)
  auditorium: Auditorium;

  @Column({ type: 'date' })
  showDate: Date;

  @Column({ type: 'time' })
  showTime: string;

  @Column('decimal', { precision: 10, scale: 2 })
  basePrice: number;

  @Column({
    type: 'enum',
    enum: ['SCHEDULED', 'CANCELLED', 'COMPLETED'],
    default: 'SCHEDULED'
  })
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}
