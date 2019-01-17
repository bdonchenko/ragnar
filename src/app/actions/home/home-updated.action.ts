import { IAction } from '@actions/i-action';
import { Injectable } from '@angular/core';
import { NumberService } from '@services/number.service';
import { HomeStore } from '@stores/home.store';

@Injectable()
export class HomeUpdatedAction implements IAction {
  constructor(private store: HomeStore, private numberService: NumberService) {}

  execute() {
    const value = this.numberService.getRandomValue();
    this.store.counter$.next(value);
  }
}
