# Ragnar

## Reactive architecture for Angular applications

Ragnar helps us write applications that behave consistently, can be easily tested and scaled. Unlike to Redux, we're operating not objects but classes which provides us an ability to make the code typed and check it for errors during TypeScript compilation. The main idea of Ragnar architecture is Unidirectional Dataflow:

![Alt text](/readme/simple_arch.png?raw=true)

1. Store contains page's state

2. Command contains business logic and updates the Store by sending a payload to an Observable stream

3. Component executes Commands and re-render itself by subscribing to Store observable items

That's it! Nothing more!

## Sample

```
git clone https://github.com/bdonchenko/ragnar.git ragnar
cd ragnar
yarn start
```

### 1. Store

Store is a single immutable data structure.

Holds an page's state - any data required for rendering

Each value in the Store must be an Observable and read-only. Observable streams and can be defined ONLY during an application initialization.

Most appropriate implementation for Store items is Rx.BehaviorSubject - when a component is created and subscribed to a store item, it receives current value from a stream.

``` typescript
export class HomePageStore {
  readonly counter$ = new BehaviorSubject<number | null>(null);
  readonly serverCounter$ = new BehaviorSubject<number>(0);
}
```

### 2. Command

Command is an independent piece of business logic. Provides "execute(payload: T)" method declared in ICommand or IDataCommand interfaces and being called by components. 

The result of Command execution is updated Store.

In case you have to reuse some piece of logic in different Commands, please move it to Services. Sharing common logic among Commands is a life purpose of Services.

``` typescript
@Injectable()
export class HomeUpdatedCommand implements ICommand {
  constructor(private store: Store, private numberService: NumberService) {}

  execute() {
    const value = this.numberService.getRandomValue();
    this.store.homeStore.counter$.next(value);
  }
}
```

### 3. Component

Components are view layer of the application. They call execute method of Actions in response to User activity and re-render themselves by subscribing to Store items.

They receive initial state during subscribing to Store items thanks to Rx.BehaviorSubject implementation.

One of amazing features of Angular is "async" pipe. Now we do not need to subscribe/unsubscribe to Store items. Angular takes care of it!

``` html
<h2>Home</h2>

<home-data-component title="Update" [data$]="data$" (onUpdated)="update($event)"></home-data-component>

<home-data-component title="Server update" [data$]
="serverData$" (onUpdated)="serverUpdate($event)"></home-data-component>

<div>
  Filtered Data: {{serverFilteredData$ | async}}
</div>
```

```typescript
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
```


### Real-world application example:

![Alt text](/readme/complicated_arch.png?raw=true)
