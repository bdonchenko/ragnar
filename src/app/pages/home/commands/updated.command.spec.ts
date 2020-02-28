import { UpdatedCommand } from './updated.command';
import { NumberService } from '../../../services/number.service';
import { HomeStore } from '../home.store';

describe('UpdatedCommand', () => {
  describe('execute', () => {
    test('updates counter$', () => {
      const store = new HomeStore();
      const numberService = {
        getRandomValue: jest.fn(() => 1),
      } as NumberService;

      const sut = new UpdatedCommand(store, numberService);

      sut.execute();

      expect(store.counter$.getValue()).toBe(1);
      expect(numberService.getRandomValue).toBeCalledTimes(1);
    });
  });
});
