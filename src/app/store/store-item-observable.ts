import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

export class StoreItemObservable<T> extends Subject<T> {
  private _currentValue: T;

  // constructor(initialValue?: T) {
  //   super();
    
  //   if (initialValue !== undefined) {
  //     this._currentValue = initialValue;
  //   }
  // }

  get value$(): Observable<T> {
    return Observable.of(this._currentValue).concat(this);
  }

  setValue(value: T) {
    this._currentValue = value;
    this.next(value);
  }
}
