import { Component } from '@angular/core';
import { Store } from '../../store/store';
import { StoreAccessor } from '../../store/store-accessor';
import { BaseComponent } from '../base-component';

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
