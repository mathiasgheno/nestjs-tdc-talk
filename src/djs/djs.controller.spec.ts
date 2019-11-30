import { DjsController } from './djs.controller';

describe('Unit: DJ Controller', () => {
  let djController;
  let djService;
  let songService;

  beforeEach(() => {
    djService = {
      getDj: jest.fn(),
    };
    songService = jest.fn();

    djController = new DjsController(
      djService,
      songService,
    );
  });

  describe('o método', () => {
    describe('findDjById()', () => {
      it('deve chamar getDj com ID passado via parâmetro', () => {
        djController.findDjById('mockID');
        expect(djService.getDj).toHaveBeenCalledWith('mockID');
      });
    });
  });
});