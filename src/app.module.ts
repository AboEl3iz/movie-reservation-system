import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import { MoviesModule } from './movies/movies.module';
import { TheatersModule } from './theaters/theaters.module';
import { ShowtimesModule } from './showtimes/showtimes.module';

import { AdminModule } from './admin/admin.module';
import { PaymentsModule } from './payments/payments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth/entities/auth.entity';
import { User } from './user/entities/user.entity';
import { Movie } from './movies/entities/movie.entity';
import { ReservationsModule } from './reservations/reservations.module';
import { Reservation } from './reservations/entities/reservation.entity';
import { Payment } from './payments/entities/payment.entity';
import { Showtime } from './showtimes/entities/showtime.entity';
import { Theater } from './theaters/entities/theater.entity';
import { AuditoriumsModule } from './auditoriums/auditoriums.module';
import { SeatsModule } from './seats/seats.module';
import { ReservedSeatsModule } from './reserved-seats/reserved-seats.module';
import { Seat } from './seats/entities/seat.entity';
import { Auditorium } from './auditoriums/entities/auditorium.entity';
import { ReservedSeat } from './reserved-seats/entities/reserved-seat.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, UserModule, MoviesModule, TheatersModule, ShowtimesModule, AdminModule, PaymentsModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' })
    ,TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: Number(process.env.DATABASE_PORT) || 5432,
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'password',
      database: process.env.DATABASE_NAME || 'moviedb',
      entities: [Auth,Movie,Reservation,Showtime,Theater,Seat,Auditorium,ReservedSeat],
      synchronize: true,
    }), ReservationsModule, AuditoriumsModule, SeatsModule, ReservedSeatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
