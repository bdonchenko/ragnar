import { ValuesRepository } from '@repositories/values.repository';
import { Injectable } from '@angular/core';
import { ICommand } from '../../i-command';
import { HomeStore } from '../home.store';

@Injectable()
export class ServerUpdatedCommand implements ICommand {
  constructor(
    private store: HomeStore,
    private valuesRepository: ValuesRepository,
  ) {}

  execute() {
    this.valuesRepository
      .getData()
      .subscribe((value) => this.store.serverCounter$.next(value));
  }
}
