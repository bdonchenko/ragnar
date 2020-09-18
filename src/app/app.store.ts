import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AppStore {
  userId = new BehaviorSubject<number>(0);
}
