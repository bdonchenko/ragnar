import { Injectable } from '@angular/core';
import { NumberService } from '@services/number.service';
import { ICommand } from '../../i-command';
import { HomeStore } from '../home.store';

@Injectable()
export class UpdatedCommand implements ICommand {
  constructor(private store: HomeStore, private numberService: NumberService) {}

  execute() {
    const value = this.numberService.getRandomValue();
    this.store.counter$.next(value);
  }
}
