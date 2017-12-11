import { Component } from '@angular/core';
import { HomeServerUpdatedAction } from 'app/actions/home/home-server-updated-action';
import { HomeUpdatedAction } from 'app/actions/home/home-updated-action';
import { BaseComponent } from 'app/components/base-component';
import { Store } from 'app/store/store';
import { StoreAccessor } from 'app/store/store-accessor';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})
export class HomeComponent extends BaseComponent {
  data: number;
  serverData: number;

  constructor(
    storeAccessor: StoreAccessor,
    private homeUpdatedAction: HomeUpdatedAction,
    private homeServerUpdatedAction: HomeServerUpdatedAction
  ) {
    super(storeAccessor);
  }

  public onStoreUpdated(store: Store): void {
    this.data = store.homeStore.counter;
    this.serverData = store.homeStore.serverCounter;
  }

  update() {
    this.homeUpdatedAction.execute();
  }

  serverUpdate() {
    this.homeServerUpdatedAction.execute();
  }
}
