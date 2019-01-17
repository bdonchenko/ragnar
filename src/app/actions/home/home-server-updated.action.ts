import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/i-action';
import { ValuesRepository } from 'app/repositories/values.repository';
import { HomeStore } from 'app/store/home-store';

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
