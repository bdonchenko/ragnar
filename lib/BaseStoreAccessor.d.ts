import { IStoreAccessor } from "./IStoreAccessor";
import { IStore } from "./IStore";
import { Subscription } from 'rxjs/Subscription';
export declare abstract class BaseStoreAccessor<T extends IStore> implements IStoreAccessor {
    private subject;
    private static store;
    constructor(store: T);
    subscribe(callback: (store: T) => void, executeImmediately: boolean): Subscription;
    updateStore(updateFunc: (store: T) => IStore): void;
}
