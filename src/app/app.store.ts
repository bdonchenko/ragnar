import { BehaviorSubject } from 'rxjs';

export class AppStore {
  userId = new BehaviorSubject<number>(0);
}
