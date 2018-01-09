import { Component } from '@angular/core';
import { HomeServerUpdatedAction } from 'app/actions/home/home-server-updated.action';
import { HomeUpdatedAction } from 'app/actions/home/home-updated.action';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  data$: Observable<number | null>;
  serverData$: Observable<number>;
  serverFilteredData$: Observable<number>;

  constructor(
    store: Store,
    private homeUpdatedAction: HomeUpdatedAction,
    private homeServerUpdatedAction: HomeServerUpdatedAction
  ) {
    const home = store.homeStore;

    this.data$ = home.counter$;
    this.serverData$ = home.serverCounter$;
    this.serverFilteredData$ = home.serverCounter$.filter(v => v % 3 === 0);
  }

  update() {
   this.homeUpdatedAction.execute();
  }

  serverUpdate() {
    this.homeServerUpdatedAction.execute();
  }
}
