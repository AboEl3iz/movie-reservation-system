import { Injectable } from '@nestjs/common';
import { CreateReservedSeatDto } from './dto/create-reserved-seat.dto';
import { UpdateReservedSeatDto } from './dto/update-reserved-seat.dto';

@Injectable()
export class ReservedSeatsService {
  create(createReservedSeatDto: CreateReservedSeatDto) {
    return 'This action adds a new reservedSeat';
  }

  findAll() {
    return `This action returns all reservedSeats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservedSeat`;
  }

  update(id: number, updateReservedSeatDto: UpdateReservedSeatDto) {
    return `This action updates a #${id} reservedSeat`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservedSeat`;
  }
}
