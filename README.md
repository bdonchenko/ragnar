# Ragnar - Reactive architecture for Angular applications

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

1. Store is only one. Store must be accessed through StoreAccessor.

2. Actions are updating Store through StoreAccessor.

3. Components are executing Actions and listening for Store updates to render prover view. Thats it! Nothing more!

### 1. Store

Application can have only ONE Store.

Store is a place where we keep all our data. Data collections, state of components etc.
That is created in StoreAccessor and can be accessed only through StoreAccessor.

StoreAccessor provides following public methods:
1. subscribe - called by Components to subscribe on Store updates.
2. updateStore - called by Actions to update Store. Calling of updateStore is implemented in BaseAction and should not be called again elsewhere.

``` typescript
@Injectable()
export class StoreAccessor {
  private static store: Store = new Store();
  private subject: Subject<Store> = new Subject<Store>();

  public subscribe(
    callback: (store: Store) => void,
    executeImmediately: boolean
  ): Subscription {
    if (executeImmediately) {
      callback(StoreAccessor.store);
    }

    return this.subject.subscribe(callback);
  }

  public async updateStore(
    updateFunc: (store: Store) => Promise<Store> | Store
  ): Promise<void> {
    StoreAccessor.store = await updateFunc(StoreAccessor.store);
    this.subject.next(Object.assign({}, StoreAccessor.store));
  }
}
```

### 2. Actions/Services

Action is an independent box of business logic. Provides "execute" method defined in base class and being called by components. The result of action execution is updated store. It calls updatedStore method from StoreAccessor.

From development perspective we just have to implement "callback" method which is modifying store.

In case you have to reuse some piece of logic in another Action, please move it to Service. Sharing common logic among Actions is a life purpose of Services.

``` typescript
@Injectable()
export class HomeUpdatedAction extends BaseAction {
  constructor(
    storeAccessor: StoreAccessor,
    private numberService: NumberService
  ) {
    super(storeAccessor);
  }

  protected callback(store: Store): Store | Promise<Store> {
    store.homeStore.counter = this.numberService.getRandomValue();
    return store;
  }
}
```

### 3. Components

Last but not least - Components. Components are View layer of the application. They contain only render logic, can execute Actions in response to User activity and update themselves by listening Store.

Communication with StoreAccessor is implemented in BaseComponent. So we have to only implement abstract method "onStoreUpdated" and that's it!

```typescript
@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})
export class HomeComponent extends BaseComponent {
  data: number;
  serverData: number;

  constructor(
    storeAccessor: StoreAccessor,
    private homeUpdatedAction: HomeUpdatedAction,
    private homeServerUpdatedAction: HomeServerUpdatedAction
  ) {
    super(storeAccessor);
  }

  public onStoreUpdated(store: Store): void {
    this.data = store.homeStore.counter;
    this.serverData = store.homeStore.serverCounter;
  }

  update() {
    this.homeUpdatedAction.execute();
  }

  serverUpdate() {
    this.homeServerUpdatedAction.execute();
  }
}

```
``` html
<h2>Home</h2>

<home-data-component title="Update" [data]="data" (onUpdated)="update($event)"></home-data-component>
<home-data-component title="Server update" [data]="serverData" (onUpdated)="serverUpdate($event)"></home-data-component>
```

### Real-world application example: 

![Alt text](/readme/complicated_arch.png?raw=true)