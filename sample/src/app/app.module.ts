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