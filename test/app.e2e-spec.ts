import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { DjsModule } from "../src/djs/djs.module";
import { DjsService } from "../src/djs/djs.service";

describe('DJ Controller (e2e)', () => {
  let app;
  const result = {
    id: 1,
    name: 'Reactivation',
    artists: ['Aura Vortex'],
    genre: ['Trance', 'Psy Trance'],
    releaseYear: 2017,
  };
  let djProvider = { getDj: () => Promise.resolve(result) };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ DjsModule ],
    }).overrideProvider(DjsService)
      .useValue(djProvider)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/djs/1')
      .expect(result);
  });

  afterAll(async () => {
    await app.close();
  });
});
