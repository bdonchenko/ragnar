import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/i-action';
import { NumberService } from 'app/services/number.service';
import { HomeStore } from './../../store/home-store';

@Injectable()
export class HomeUpdatedAction implements IAction {
  constructor(private store: HomeStore, private numberService: NumberService) {}

  execute() {
    const value = this.numberService.getRandomValue();
    this.store.counter$.next(value);
  }
}
