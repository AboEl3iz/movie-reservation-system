import { Module } from '@nestjs/common';
import { SeatsService } from './seats.service';
import { SeatsController } from './seats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seat } from './entities/seat.entity';

@Module({
  controllers: [SeatsController],
  providers: [SeatsService],
  imports: [TypeOrmModule.forFeature([Seat])], // Import any necessary modules here, such as TypeOrmModule if you have entities
})
export class SeatsModule {}
