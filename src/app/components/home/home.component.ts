import { Component } from '@angular/core';
import { HomeServerUpdatedAction } from 'app/actions/home/home-server-updated.action';
import { HomeUpdatedAction } from 'app/actions/home/home-updated.action';
import { HomeStore } from 'app/store/home-store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  data$: Observable<number | null>;
  serverData$: Observable<number>;
  serverFilteredData$: Observable<number>;

  constructor(
    store: HomeStore,
    private homeUpdatedAction: HomeUpdatedAction,
    private homeServerUpdatedAction: HomeServerUpdatedAction
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
