import { IStore } from "ragnar/IStore";
import { Person } from "./models/person.model";
import {Injectable} from '@angular/core';

@Injectable()
export class Store implements IStore {
    people: Person[] = [];
}