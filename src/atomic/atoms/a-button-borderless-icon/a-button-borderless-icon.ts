import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-button-borderless-icon',
  templateUrl: './a-button-borderless-icon.html',
  styleUrls: ['./a-button-borderless-icon.scss']
})
export class AButtonBorderlessIcon {
  @Input() icon: string;
  @Input() label: string;
  @Input() onClick: (event: Event) => void;
}
