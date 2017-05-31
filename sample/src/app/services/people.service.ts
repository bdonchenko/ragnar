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
        person.age = person.age + 1;

        this.storeAccessor.updateStore(store => {
            store.people.push(person)
            return store;
        });
    }
}