import { StoreItemObservable } from 'app/store/store-item-observable';

export class HomeStore {
  private _counter = new StoreItemObservable<number>();
  get counter() {
    return this._counter;
  }

  private _serverCounter = new StoreItemObservable<number>();
  get serverCounter() {
    return this._serverCounter;
  }
}
