import { IAction } from '@actions/i-action';
import { Injectable } from '@angular/core';
import { ValuesRepository } from '@repositories/values.repository';
import { HomeStore } from '@stores/home.store';

@Injectable()
export class HomeServerUpdatedAction implements IAction {
  constructor(
    private store: HomeStore,
    private valuesRepository: ValuesRepository
  ) {}

  execute() {
    this.valuesRepository
      .getData()
      .subscribe(value => this.store.serverCounter$.next(value));
  }
}
