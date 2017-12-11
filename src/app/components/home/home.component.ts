import { Component } from '@angular/core';
import { HomeUpdatedAction } from 'app/actions/home/home-updated-action';
import { BaseComponent } from 'app/components/base-component';
import { Store } from 'app/store/store';
import { StoreAccessor } from 'app/store/store-accessor';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})
export class HomeComponent extends BaseComponent {
  data: string;

  constructor(
    storeAccessor: StoreAccessor,
    private homeUpdatedAction: HomeUpdatedAction
  ) {
    super(storeAccessor);
  }

  public onStoreUpdated(store: Store): void {
    this.data = 'update ' + store.counter;
  }

  update() {
    this.homeUpdatedAction.execute();
  }
}
