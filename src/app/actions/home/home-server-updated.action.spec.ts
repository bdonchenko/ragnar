import { ValuesRepository } from 'app/repositories/values.repository';
import { HomeStore } from 'app/store/home-store';
import { of } from 'rxjs';
import { HomeServerUpdatedAction } from './home-server-updated.action';

describe('HomeServerUpdatedAction', () => {
  describe('execute', () => {
    test('updates serverCounter$', () => {
      const store = new HomeStore();
      const valuesRepository = <ValuesRepository>{
        getData: () => of(1)
      };

      const sut = new HomeServerUpdatedAction(store, valuesRepository);

      sut.execute();

      expect(store.serverCounter$.getValue()).toBe(1);
    });
  });
});
