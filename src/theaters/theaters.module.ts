import { Module } from '@nestjs/common';
import { TheatersService } from './theaters.service';
import { TheatersController } from './theaters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theater } from './entities/theater.entity';

@Module({
  controllers: [TheatersController],
  providers: [TheatersService],
  imports: [TypeOrmModule.forFeature([Theater])], // Import any necessary modules here, such as TypeOrmModule if you have entities
})
export class TheatersModule {}
