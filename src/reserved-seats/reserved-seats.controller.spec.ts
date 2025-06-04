import { Test, TestingModule } from '@nestjs/testing';
import { ReservedSeatsController } from './reserved-seats.controller';
import { ReservedSeatsService } from './reserved-seats.service';

describe('ReservedSeatsController', () => {
  let controller: ReservedSeatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservedSeatsController],
      providers: [ReservedSeatsService],
    }).compile();

    controller = module.get<ReservedSeatsController>(ReservedSeatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
