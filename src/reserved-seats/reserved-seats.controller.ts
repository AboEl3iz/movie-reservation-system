import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservedSeatsService } from './reserved-seats.service';
import { CreateReservedSeatDto } from './dto/create-reserved-seat.dto';
import { UpdateReservedSeatDto } from './dto/update-reserved-seat.dto';

@Controller('reserved-seats')
export class ReservedSeatsController {
  constructor(private readonly reservedSeatsService: ReservedSeatsService) {}

  @Post()
  create(@Body() createReservedSeatDto: CreateReservedSeatDto) {
    return this.reservedSeatsService.create(createReservedSeatDto);
  }

  @Get()
  findAll() {
    return this.reservedSeatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservedSeatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservedSeatDto: UpdateReservedSeatDto) {
    return this.reservedSeatsService.update(+id, updateReservedSeatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservedSeatsService.remove(+id);
  }
}
