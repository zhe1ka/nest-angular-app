import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { HttpModule } from '@nestjs/axios';

xdescribe('UsersService', () => {
  let service: UsersService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, HttpModule],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
