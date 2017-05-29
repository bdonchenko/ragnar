import { Component } from '@angular/core';
import { BaseComponent } from "ragnar/BaseComponent";
import { Person } from "../../models/person.model";
import { StoreAccessor } from "../../store-accessor";
import { Store } from "../../store";


@Component({
  selector: 'people',
  template: `<ul>
    <li *ngFor="let person of people">{{person.name}} is {{person.age}} years old.</li>
  </ul>`
})
export class PeopleComponent extends BaseComponent {
  people: Person[] = [];

  constructor(storeAccessor: StoreAccessor
  ) {
    super(storeAccessor);
  }

  onStoreUpdated(store: Store) {
    this.people = store.people.sort((a, b) => {
      return b.age - a.age;
    });
  }
}
