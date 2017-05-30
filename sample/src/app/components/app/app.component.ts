import { Component } from '@angular/core';
import { BaseComponent } from "ragnar/BaseComponent";
import { AddPersonAction } from "../../actions/add-person.action";
import { Person } from "../../models/person.model";

@Component({
  selector: 'my-app',
  template: `<people></people>`
})
export class AppComponent {
  constructor(
    private addPersonAction: AddPersonAction
  ) {

    //User activity simulation
    let i = 0;
    setInterval(() => {
      i++;
      let person = {
        name: "Person " + i,
        age: i
      };

      this.addPersonAction.dispatch(person);
    }, 1000);
  }
}
