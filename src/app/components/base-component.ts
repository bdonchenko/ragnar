import { Subscription } from 'rxjs/Subscription';
import { Store } from '../store/store';
import { StoreAccessor } from '../store/store-accessor';

export abstract class BaseComponent {
  protected subscriptions: Subscription[] = [];

  constructor(protected storeAccessor: StoreAccessor) {}

  attached(readStoreDataImmediately: boolean = true): void {
    let subscription = this.storeAccessor.subscribe(
      store => this.onStoreUpdated(store),
      readStoreDataImmediately
    );

    this.subscriptions.push(subscription);
  }

  detached(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  /**
   * Will be called when Store is updated. Should be overwritten in derived
   * classes
   */
  public abstract onStoreUpdated(store: Store): void;
}
