import { Test, TestingModule } from '@nestjs/testing';
import { GetServerController } from './get-server.controller';

describe('GetServerController', () => {
  let controller: GetServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetServerController],
    }).compile();

    controller = module.get<GetServerController>(GetServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
