import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'home-data-component',
  templateUrl: 'home-data.component.html',
  styleUrls: ['home-data.component.scss']
})
export class HomeDataComponent {
  @Input() data: number = 0;
  @Input() title: string = '';
  @Output() onUpdated = new EventEmitter<boolean>();

  click() {
    this.onUpdated.emit();
  }
}
