import { OnDestroy, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '../store/store';
import { StoreAccessor } from '../store/store-accessor';

export abstract class BaseComponent implements OnInit, OnDestroy {

  protected subscriptions: Subscription[] = [];

  constructor(protected storeAccessor: StoreAccessor) {}

  ngOnInit(readStoreDataImmediately: boolean = true): void {
    let subscription = this.storeAccessor.subscribe(
      store => this.onStoreUpdated(store),
      readStoreDataImmediately
    );

    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  /**
   * Will be called when Store is updated. Should be overwritten in derived
   * classes
   */
  public abstract onStoreUpdated(store: Store): void;
}
