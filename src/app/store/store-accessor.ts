import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Store } from './store';

@Injectable()
export class StoreAccessor {
  private static store: Store = new Store();
  private subject: Subject<Store> = new Subject<Store>();

  public subscribe(
    callback: (store: Store) => void,
    executeImmediately: boolean
  ): Subscription {
    if (executeImmediately) {
      callback(StoreAccessor.store);
    }

    return this.subject.subscribe(callback);
  }

  public async updateStore(
    updateFunc: (store: Store) => Promise<Store> | Store
  ): Promise<void> {
    StoreAccessor.store = await updateFunc(StoreAccessor.store);
    this.subject.next(Object.assign({}, StoreAccessor.store));
  }
}
