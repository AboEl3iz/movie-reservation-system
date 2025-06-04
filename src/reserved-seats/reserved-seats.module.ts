import { Module } from '@nestjs/common';
import { ReservedSeatsService } from './reserved-seats.service';
import { ReservedSeatsController } from './reserved-seats.controller';
import { ReservedSeat } from './entities/reserved-seat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ReservedSeatsController],
  providers: [ReservedSeatsService],
  imports: [TypeOrmModule.forFeature([ReservedSeat])], // Import any necessary modules here, such as TypeOrmModule if you have entities
})
export class ReservedSeatsModule {}
