import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'data-component',
  templateUrl: 'data.component.html',
  styleUrls: ['data.component.scss']
})
export class DataComponent {
  @Input() data = 0;

  @Input() title = '';

  @Output() onUpdated = new EventEmitter<boolean>();

  click() {
    this.onUpdated.emit();
  }
}
