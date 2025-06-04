import { Test, TestingModule } from '@nestjs/testing';
import { ReservedSeatsService } from './reserved-seats.service';

describe('ReservedSeatsService', () => {
  let service: ReservedSeatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservedSeatsService],
    }).compile();

    service = module.get<ReservedSeatsService>(ReservedSeatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
