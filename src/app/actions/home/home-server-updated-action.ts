import { Injectable } from '@angular/core';
import { BaseAction } from 'app/actions/base-action';
import { ValuesRepository } from 'app/repositories/values-repository';
import { Store } from 'app/store/store';
import { StoreAccessor } from 'app/store/store-accessor';

@Injectable()
export class HomeServerUpdatedAction extends BaseAction {
  constructor(
    storeAccessor: StoreAccessor,
    private valuesRepository: ValuesRepository
  ) {
    super(storeAccessor);
  }

  protected async callback(store: Store): Promise<Store> {
    store.homeStore.serverCounter = await this.valuesRepository.getData();
    return store;
  }
}
