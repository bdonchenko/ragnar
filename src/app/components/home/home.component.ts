import { Component } from '@angular/core';
import { ValuesService } from 'app/service/values.service';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  constructor(private valuesService: ValuesService) {}

  data = 1;

  update() {
    this.data = this.valuesService.getValue();
  }
}
