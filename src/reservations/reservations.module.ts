import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { Reservation } from './entities/reservation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ReservationsController],
  providers: [ReservationsService],
  imports:[TypeOrmModule.forFeature([Reservation])], // Import the Reservation entity
})
export class ReservationsModule {}
