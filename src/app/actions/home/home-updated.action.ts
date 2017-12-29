import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/i-action';
import { NumberService } from 'app/services/number.service';
import { Store } from 'app/store/store';

@Injectable()
export class HomeUpdatedAction implements IAction {
  constructor(private store: Store, private numberService: NumberService) {}

  execute() {
    const value = this.numberService.getRandomValue();
    this.store.homeStore.counter$.next(value);
  }
}
