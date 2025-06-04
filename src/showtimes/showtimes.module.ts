import { Module } from '@nestjs/common';
import { ShowtimesService } from './showtimes.service';
import { ShowtimesController } from './showtimes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Showtime } from './entities/showtime.entity';

@Module({
  controllers: [ShowtimesController],
  providers: [ShowtimesService],
  imports: [TypeOrmModule.forFeature([Showtime])], // Import any necessary modules here, such as TypeOrmModule if you have entities
})
export class ShowtimesModule {}
