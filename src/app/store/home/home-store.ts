import { BehaviorSubject } from 'rxjs';

export class HomeStore {
  readonly counter$ = new BehaviorSubject<number | null>(null);
  readonly serverCounter$ = new BehaviorSubject<number>(0);
}
