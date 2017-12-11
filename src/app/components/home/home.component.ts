import { Component } from '@angular/core';
import { BaseComponent } from 'app/components/base-component';
import { Store } from 'app/store/store';
import { StoreAccessor } from 'app/store/store-accessor';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})
export class HomeComponent extends BaseComponent {
  data: string;
  counter = 0;

  constructor(storeAccessor: StoreAccessor) {
    super(storeAccessor);
  }

  public onStoreUpdated(store: Store): void {
    throw new Error('Method not implemented.');
  }

  update() {
    this.data = 'text' + this.counter++;
  }
}
