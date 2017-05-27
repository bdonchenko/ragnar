import { IStoreAccessor } from "./IStoreAccessor";
import {IStore} from "./IStore";

export class StoreAccessor implements IStoreAccessor {
    
    private static store: IStore;
    private subscribers: ((store: IStore) => void)[] = [];

    constructor(store: IStore) {
        StoreAccessor.store = store;
    }

    subscribeStore(callback: (store: IStore) => void, executeImmediately: boolean): () => void {
        this.subscribers.push(callback);

        if (executeImmediately) {
            callback(StoreAccessor.store);
        }

        return () => {
            this.subscribers = this.subscribers.filter(s => s !== callback);
        }
    }

    updateStore(updateFunc: (store: IStore) => IStore): void {
        StoreAccessor.store = updateFunc(StoreAccessor.store);
    }
}