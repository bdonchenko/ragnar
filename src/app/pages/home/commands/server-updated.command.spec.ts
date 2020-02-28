import { ValuesRepository } from '@repositories/values.repository';
import { of } from 'rxjs';
import { HomeStore } from '../home.store';
import { ServerUpdatedCommand } from './server-updated.command';

describe('ServerUpdatedCommand', () => {
  describe('execute', () => {
    test('updates serverCounter$', () => {
      const store = new HomeStore();
      const valuesRepository = {
        getData: () => of(1),
      } as ValuesRepository;

      const sut = new ServerUpdatedCommand(store, valuesRepository);

      sut.execute();

      expect(store.serverCounter$.getValue()).toBe(1);
    });
  });
});
