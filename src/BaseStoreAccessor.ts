import { IStoreAccessor } from "./IStoreAccessor";
import {IStore} from "./IStore";

export abstract class BaseStoreAccessor<T extends IStore> implements IStoreAccessor {
    
    private static store: IStore;
    private subscribers: ((store: T) => void)[] = [];

    constructor(store: T) {
        BaseStoreAccessor.store = store;
    }

    subscribeStore(callback: (store: T) => void, executeImmediately: boolean): () => void {
        this.subscribers.push(callback);

        if (executeImmediately) {
            callback(<T>BaseStoreAccessor.store);
        }

        return () => {
            this.subscribers = this.subscribers.filter(s => s !== callback);
        }
    }

    updateStore(updateFunc: (store: T) => IStore): void {
        BaseStoreAccessor.store = updateFunc(<T>Object.assign({}, BaseStoreAccessor.store));
        
        this.subscribers
            .reverse()
            .forEach(callback => callback(<T>BaseStoreAccessor.store));
    }
}