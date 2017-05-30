import { BaseStoreAccessor } from 'ragnar/BaseStoreAccessor';
import { Injectable } from '@angular/core'
import { Store } from "./store";

@Injectable()
export class StoreAccessor extends BaseStoreAccessor<Store> {

    constructor(store: Store) {
        super(store);
    }
}