import { BehaviorSubject } from 'rxjs';

export class HomeStore {
  private _counter$ = new BehaviorSubject<number | null>(null);
  get counter$() {
    return this._counter$;
  }

  private _serverCounter$ = new BehaviorSubject<number>(0);
  get serverCounter$() {
    return this._serverCounter$;
  }
}
