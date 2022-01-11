import { Test, TestingModule } from '@nestjs/testing';
import { PostosController } from './postos.controller';
import { PostosService } from './postos.service';

describe('PostosController', () => {
  let controller: PostosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostosController],
      providers: [PostosService],
    }).compile();

    controller = module.get<PostosController>(PostosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
