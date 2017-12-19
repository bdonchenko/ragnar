import { Store } from 'app/store/store';
import { StoreAccessor } from 'app/store/store-accessor';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

export class StoreAccessorStub extends StoreAccessor {
  public store: Store = new Store();
  protected subjectStub: Subject<Store> = new Subject<Store>();

  public subscribe(
    callback: (store: Store) => void,
    executeImmediately: boolean
  ): Subscription {
    if (executeImmediately) {
      callback(this.store);
    }

    return this.subjectStub.subscribe(callback);
  }

  public async updateStore(updateFunc: (store: Store) => Promise<Store> | Store): Promise<void> {
    this.store = await updateFunc(this.store);
    this.subjectStub.next(Object.assign({}, this.store));
  }
}
