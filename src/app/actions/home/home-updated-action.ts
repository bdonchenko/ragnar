import { Injectable } from '@angular/core';
import { BaseAction } from 'app/actions/base-action';
import { Store } from 'app/store/store';
import { StoreAccessor } from 'app/store/store-accessor';

@Injectable()
export class HomeUpdatedAction extends BaseAction {
  constructor(storeAccessor: StoreAccessor) {
    super(storeAccessor);
  }

  protected callback(store: Store): Store | Promise<Store> {
    store.counter++;
    return store;
  }
}
