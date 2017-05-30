import { Injectable } from '@angular/core';
import { Person } from "../models/person.model";
import { BaseAction } from "ragnar/BaseAction";

@Injectable()
export class AddPersonAction extends BaseAction<Person> {}