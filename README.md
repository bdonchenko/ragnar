# Ragnar - Reactive architecture for Angular applications

## Installation

npm install --save-dev ragnar

## Description

Bunch of classes and interfaces for building Reactive Angular applications. Inspired by FLUX.

Let's consider main idea of Ragnar architecture - Unidirectional Dataflow.

![Alt text](/readme/simple_arch.png?raw=true)

1. Store is only one. Access to Store is provided through StoreAccessor.

2. StoreAccessor, Services and Actions are singletons.

### 1. Actions

Every user/application event (save button click or loading additional data on start of app) is independent class inherited from BaseAction. Components dispatch them. Services subscribe to them.

Action need to have a type of payload. Payload - data which is received by Service. In our case  it is a Person class: 

``` typescript
import { Injectable } from '@angular/core';
import { Person } from "../models/person.model";
import { BaseAction } from "ragnar/BaseAction";

@Injectable()
export class AddPersonAction extends BaseAction<Person> {}
```

### 2. Store Accessor

Store is our DB where we have everything we need. Data collections, states etc.
Application is able to have only one store. Store is implementing interface IStore and being injected into StoreAccessor:

``` typescript
import { IStore } from "ragnar/IStore";
import { Person } from "./models/person.model";
import {Injectable} from '@angular/core';

@Injectable()
export class Store implements IStore {
    people: Person[] = [];
}
```

Now we can inject it into Store Accessor. StoreAccessor is implementaion of IStoreAccessor and inherited from BaseStoreAccessor. It's going to be used by Service for changing Store and by Components for updating their state:

``` typescript
import { BaseStoreAccessor } from 'ragnar/BaseStoreAccessor';
import { Injectable } from '@angular/core'
import { Store } from "./store";

@Injectable()
export class StoreAccessor extends BaseStoreAccessor<Store> {

    constructor(store: Store) {
        super(store);
    }
}
```

### 3. Services

Whole business logic of app is in Services. Service is singleton. Ragnar does not allow us to inject Services. So it should be instantiated in Composition Root. In our case it is AppModule.

Services use StoreAccessor for updating Store and Actions for listening them.

``` typescript
import { Injectable } from '@angular/core';
import { AddPersonAction } from "../actions/add-person.action";
import { Person } from "../models/person.model";
import { StoreAccessor } from "../store-accessor";

@Injectable()
export class PeopleService {

    constructor(
        private storeAccessor: StoreAccessor,
        addPersonAction: AddPersonAction
    ) {
        addPersonAction.subscribe(person => this.addPerson(person));
    }

    addPerson(person: Person): void {
        person.age = person.age * 10;

        this.storeAccessor.updateStore(store => {
            store.people.push(person)
            return store;
        });
    }
}
```

``` typescript
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PeopleService } from "./services/people.service";
import { AddPersonAction } from "./actions/add-person.action";
import { Store } from "./store";
import { StoreAccessor } from "./store-accessor";
import { AppComponent } from "./components/app/app.component";
import { PeopleComponent } from "./components/people/people.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, PeopleComponent],
  bootstrap: [AppComponent],
  providers: [
    //Store
    Store,
    StoreAccessor,
    //Actions
    AddPersonAction,
    //Services
    PeopleService
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    /* 
    We need to instantiate every service because 
    they are not going to be injected in any component 
    */
    injector.get(PeopleService);
  }
}
```

### 4. Components

Last but not least - Components. Components are View layer of the application. They contain only render logic, can dispatch Actions in response to User activity and update themselves by listening Store:

```typescript
import { Component } from '@angular/core';
import { BaseComponent } from "ragnar/BaseComponent";
import { AddPersonAction } from "../../actions/add-person.action";
import { Person } from "../../models/person.model";

@Component({
  selector: 'my-app',
  template: `<people></people>`
})
export class AppComponent {
  constructor(
    private addPersonAction: AddPersonAction
  ) {

    //User activity simulation
    let i = 0;
    setInterval(() => {
      i++;
      let person = {
        name: "Person " + i,
        age: i
      };

      this.addPersonAction.dispatch(person);
    }, 1000);
  }
}
```

``` typescript
import { Component } from '@angular/core';
import { BaseComponent } from "ragnar/BaseComponent";
import { Person } from "../../models/person.model";
import { StoreAccessor } from "../../store-accessor";
import { Store } from "../../store";

@Component({
  selector: 'people',
  template: `<ul>
    <li *ngFor="let person of people">{{person.name}} is {{person.age}} years old.</li>
  </ul>`
})
export class PeopleComponent extends BaseComponent {
  people: Person[] = [];

  constructor(storeAccessor: StoreAccessor
  ) {
    super(storeAccessor);
  }

  onStoreUpdated(store: Store) {
    this.people = store.people.sort((a, b) => {
      return b.age - a.age;
    });
  }
}

```

### More complex example

![Alt text](/readme/complicated_arch.png?raw=true)

## Sample

```
git clone https://github.com/bdonchenko/ragnar.git ragnar
cd ragnar/sample
npm install
npm start
```


