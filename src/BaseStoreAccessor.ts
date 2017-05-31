import { IStoreAccessor } from "./IStoreAccessor";
import { IStore } from "./IStore";
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

export abstract class BaseStoreAccessor<T extends IStore> implements IStoreAccessor {

    private subject: Subject<T> = new Subject<T>();
    private static store: IStore;

    constructor(store: T) {
        BaseStoreAccessor.store = store;
    }

    subscribe(callback: (store: T) => void, executeImmediately: boolean): Subscription {
        if (executeImmediately) {
            callback(<T>BaseStoreAccessor.store);
        }

        return this.subject.subscribe(callback);
    }

    updateStore(updateFunc: (store: T) => IStore): void {
        const store = updateFunc(<T>Object.assign({}, BaseStoreAccessor.store));
        BaseStoreAccessor.store = store;
        this.subject.next(<T>Object.assign({}, store));
    }
}