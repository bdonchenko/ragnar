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
  data$: Observable<number>;
  serverData$: Observable<number>;
  serverFilteredData$: Observable<number>;

  constructor(
    store: Store,
    private homeUpdatedAction: HomeUpdatedAction,
    private homeServerUpdatedAction: HomeServerUpdatedAction
  ) {
    const home = store.homeStore;

    this.data$ = home.counter.value$;
    this.serverData$ = home.serverCounter.value$;
    this.serverFilteredData$ = home.serverCounter.value$.filter(v => v % 3 === 0);
  }

  update() {
   this.homeUpdatedAction.execute();
  }

  async serverUpdate() {
    await this.homeServerUpdatedAction.execute();
  }
}
