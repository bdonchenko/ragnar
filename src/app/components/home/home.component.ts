import { Component } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  data: string;
  counter = 0;

  update() {
    this.data = 'text' + this.counter++;
  }
}
