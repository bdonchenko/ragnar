import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HomeStore } from './home.store';
import { ServerUpdatedCommand } from './commands/server-updated.command';
import { UpdatedCommand } from './commands/updated.command';

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.component.html'
})
export class HomePageComponent {
  data$: Observable<number | null>;

  serverData$: Observable<number>;

  serverFilteredData$: Observable<number>;

  constructor(
    store: HomeStore,
    private homeUpdatedAction: UpdatedCommand,
    private homeServerUpdatedAction: ServerUpdatedCommand
  ) {

    this.data$ = store.counter$;
    this.serverData$ = store.serverCounter$;
    this.serverFilteredData$ = store.serverCounter$.pipe(
      filter(v => v % 3 === 0)
    );
  }

  update() {
    this.homeUpdatedAction.execute();
  }

  serverUpdate() {
    this.homeServerUpdatedAction.execute();
  }
}
