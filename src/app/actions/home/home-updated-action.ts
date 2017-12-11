import { Injectable } from '@angular/core';
import { BaseAction } from 'app/actions/base-action';
import { NumberService } from 'app/services/number-service';
import { Store } from 'app/store/store';
import { StoreAccessor } from 'app/store/store-accessor';

@Injectable()
export class HomeUpdatedAction extends BaseAction {
  constructor(storeAccessor: StoreAccessor, private numberService: NumberService) {
    super(storeAccessor);
  }

  protected callback(store: Store): Store | Promise<Store> {
    store.counter = this.numberService.getRandomValue();
    return store;
  }
}
