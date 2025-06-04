import { Module } from '@nestjs/common';
import { AuditoriumsService } from './auditoriums.service';
import { AuditoriumsController } from './auditoriums.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auditorium } from './entities/auditorium.entity';

@Module({
  controllers: [AuditoriumsController],
  providers: [AuditoriumsService],
  imports: [TypeOrmModule.forFeature([Auditorium])], // Import the Auditorium entity
})
export class AuditoriumsModule {}
