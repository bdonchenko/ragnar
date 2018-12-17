import { ValuesRepository } from 'app/repositories/values.repository';
import { Store } from 'app/store/store';
import { of } from 'rxjs';
import { HomeServerUpdatedAction } from './home-server-updated.action';

describe('HomeServerUpdatedAction', () => {
  describe('execute', () => {
    it('updates serverCounter$', () => {
      const store = new Store();
      const valuesRepository = <ValuesRepository>{
        getData: () => of(1)
      };
      
      const sut = new HomeServerUpdatedAction(store, valuesRepository);

      sut.execute();

      expect(store.homeStore.serverCounter$.getValue()).toBe(1);
    });
  });
});
