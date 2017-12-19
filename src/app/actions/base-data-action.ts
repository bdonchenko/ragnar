import { Store } from 'app/store/store';
import { StoreAccessor } from 'app/store/store-accessor';

export abstract class BaseDataAction<T> {
  constructor(private storeAccessor: StoreAccessor) {}

  protected abstract callback(store: Store, data: T): Promise<Store> | Store;

  async execute(data: T): Promise<void> {
    await this.storeAccessor.updateStore(
      async store => await this.callback(store, data)
    );
  }
}
