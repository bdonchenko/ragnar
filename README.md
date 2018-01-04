# Ragnar - Simple Reactive architecture for Angular applications

## Sample

```
git clone https://github.com/bdonchenko/ragnar.git ragnar
cd ragnar
npm start
```

## Description

Bunch of classes and interfaces for building Reactive Angular applications. Inspired by FLUX/Redux.

Let's consider the main idea of Ragnar architecture - Unidirectional Dataflow.

![Alt text](/readme/simple_arch.png?raw=true)

1. Store is only one. Store items are Rx Observables.

2. Actions are updating Store pushing payload to an Observable stream.

3. Components are executing Actions and listening for Store updates to render prover view. That's it! Nothing more!

### 1. Store

Application can have only ONE Store.

Store is a place where we keep all our data. Data collections, state of components etc.

Each value in the Store must be an Observable. Most appropriate implementation is BehaviorSubject - when a component is created and subscribed to a store item, it receives current store value.

``` typescript
import { BehaviorSubject } from 'rxjs';

export class HomeStore {
  private _counter$ = new BehaviorSubject<number | null>(null);
  get counter$() {
    return this._counter$;
  }

  private _serverCounter$ = new BehaviorSubject<number>(0);
  get serverCounter$() {
    return this._serverCounter$;
  }
}

```

### 2. Actions/Services

Action is an independent box of business logic. Provides "execute" method declared in IAction of IDataAction interface and being called by components. 

The result of action is updated Store calling 'next' method of appropriate Store item.

In case you have to reuse some piece of logic in another Action, please move it to Service. Sharing common logic among Actions is a life purpose of Services.

``` typescript
@Injectable()
export class HomeUpdatedAction implements IAction {
  constructor(private store: Store, private numberService: NumberService) {}

  execute() {
    const value = this.numberService.getRandomValue();
    this.store.homeStore.counter$.next(value);
  }
}

```

### 3. Components

Last but not least - Components. Components are View layer of the application. They contain only render logic, can execute Actions in response to User activity and update themselves by subscribing to Store items.

```typescript
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

  async serverUpdate() {
    await this.homeServerUpdatedAction.execute();
  }
}

```
``` html
<h2>Home</h2>

<home-data-component title="Update" [data$]="data$" (onUpdated)="update($event)"></home-data-component>
<home-data-component title="Server update" [data$]="serverData$" (onUpdated)="serverUpdate($event)"></home-data-component>
<div>
  Filtered Data: {{serverFilteredData$ | async}}
</div>
```

### Real-world application example:

![Alt text](/readme/complicated_arch.png?raw=true)