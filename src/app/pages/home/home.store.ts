import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeStore {
  readonly counter$ = new BehaviorSubject<number | null>(null);

  readonly serverCounter$ = new BehaviorSubject<number>(0);
}
