import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/i-action';
import { ValuesRepository } from 'app/repositories/values.repository';
import { Store } from 'app/store/store';

@Injectable()
export class HomeServerUpdatedAction implements IAction {
  constructor(
    private store: Store,
    private valuesRepository: ValuesRepository
  ) {}

  async execute() {
    const value = await this.valuesRepository.getData();
    this.store.homeStore.serverCounter.setValue(value);
  }
}
