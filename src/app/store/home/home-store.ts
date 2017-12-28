import { StoreItem } from 'app/store/store-item';

export class HomeStore {
  private _counter = new StoreItem<number>();
  get counter() {
    return this._counter;
  }

  private _serverCounter = new StoreItem<number>();
  get serverCounter() {
    return this._serverCounter;
  }
}
