import { IStoreAccessor } from "./IStoreAccessor";
import { IStore } from "./IStore";
export declare abstract class BaseStoreAccessor<T extends IStore> implements IStoreAccessor {
    private static store;
    private subscribers;
    constructor(store: T);
    subscribeStore(callback: (store: T) => void, executeImmediately: boolean): () => void;
    updateStore(updateFunc: (store: T) => IStore): void;
}
