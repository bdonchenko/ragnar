import { Store } from 'app/store/store';
import { StoreAccessor } from 'app/store/store-accessor';

export abstract class BaseAction {
  constructor(private storeAccessor: StoreAccessor) {}

  protected abstract callback(store: Store): Promise<Store> | Store;

  async execute(): Promise<void> {
    await this.storeAccessor.updateStore(
      async store => await this.callback(store)
    );
  }
}
